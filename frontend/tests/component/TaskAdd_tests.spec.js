import { shallowMount } from '@vue/test-utils'
import TaskAdd from '@/components/TaskAdd.vue'

describe('TaskAdd.vue', () => {
    it('should render adding button with correct text', () => {
        const wrapper = shallowMount(TaskAdd, {
        })

        let button = wrapper.find('.btnAdd')

        expect(button.exists()).toBeTruthy()
        expect(button.text()).toBe("Add Task")
    })

    it('should render adding input with correct placeholder', () => {
        const wrapper = shallowMount(TaskAdd, {
        })

        let input = wrapper.find('.inpAdd')

        expect(input.exists()).toBeTruthy()
        expect(input.attributes('placeholder')).toBe("Enter a Task...")
    })
})