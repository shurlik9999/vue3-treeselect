import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import Treeselect from "../../../dist/vue3-treeselect.esm.js";

describe("GitHub package ESM build", () => {
  it("names the combobox and exposes its controlled tree", async () => {
    const wrapper = mount(Treeselect, {
      props: {
        instanceId: "test-tree",
        inputId: "test-input",
        ariaLabel: "Aircraft type",
        ariaDescribedby: "error",
        ariaInvalid: true,
        options: [{ id: "jet", label: "Jet" }],
        modelValue: null
      }
    });
    const input = wrapper.get("input");
    expect(input.attributes("id")).toBe("test-input");
    expect(input.attributes("role")).toBe("combobox");
    expect(input.attributes("aria-label")).toBe("Aircraft type");
    expect(input.attributes("aria-describedby")).toBe("error");
    expect(input.attributes("aria-invalid")).toBe("true");
    await input.trigger("keydown", { key: "ArrowDown", keyCode: 40, which: 40 });
    await nextTick();
    expect(input.attributes("aria-expanded")).toBe("true");
    expect(input.attributes("aria-controls")).toBe(wrapper.get('[role="tree"]').attributes("id"));
    expect(wrapper.get('[role="treeitem"]').attributes("aria-label")).toBe("Jet");
    wrapper.unmount();
  });

  it("removes a selected value with the keyboard", async () => {
    const wrapper = mount(Treeselect, {
      props: {
        options: [{ id: "jet", label: "Jet" }],
        multiple: true,
        modelValue: ["jet"]
      }
    });
    await wrapper.get('[aria-label="Remove Jet"]').trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("update:modelValue").at(-1)[0]).toEqual([]);
    wrapper.unmount();
  });
});
