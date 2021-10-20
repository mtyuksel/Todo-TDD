import { shallowMount } from '@vue/test-utils'
import TaskAdd from '@/components/TaskAdd.vue'

describe('TaskAdd.vue | Unit Tests', () => {
    it('should detect stars in a task name', () => {
        const wrapper = shallowMount(TaskAdd, {
        })

        let taskWithStars = "*t@sk- w!th-st*r **"
        let taskWithoutStars = "t@sk- w!th0ut-st@r$"

        let isContainsStarTrue = wrapper.vm.isTaskContainsStar(taskWithStars);
        let isContainsStarFalse = wrapper.vm.isTaskContainsStar(taskWithoutStars);

        expect(isContainsStarTrue).toBeTruthy();
        expect(isContainsStarFalse).toBeFalsy();
    })
})