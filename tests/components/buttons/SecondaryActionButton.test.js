const { mount } = require("@vue/test-utils")
const SecondaryActionButton = require("../../../src/components/buttons/SecondaryActionButton.vue")

// import SecondaryActionButton from "../../../src/components/buttons/SecondaryActionButton.vue"

const DEFAULT_TEXT = "Click here"

describe("PrimaryActionButton", () => {
  test("can have content put inside a slot", () => {
    const wrapper = mountButton()
    expect(wrapper.text()).toEqual(DEFAULT_TEXT)
  })

  test("is enabled by default", () => {
    const wrapper = mountButton()
    expect(wrapper.attributes("disabled")).toEqual(undefined)
  })

  test("can be disabled", async () => {
    const wrapper = mountButton({ disabled: true })
    expect(wrapper.attributes("disabled")).toEqual("")

    await wrapper.trigger("click")
    expect(wrapper.emitted().click).toBeFalsy()
  })

  test("can be clicked", async () => {
    const wrapper = mountButton()
    const button = wrapper.find("button")

    await button.trigger("click")
    expect(wrapper.emitted().click).toBeTruthy()
  })
})

const mountButton = (props) => {
  return mount(SecondaryActionButton, {
    propsData: {
      ...props,
    },
    slots: { default: DEFAULT_TEXT },
  })
}
