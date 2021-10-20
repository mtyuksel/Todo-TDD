import { shallowMount } from '@vue/test-utils'
import TaskList from '@/components/TaskList.vue'

describe('TaskList.vue', () => {
    it('should render todo list with given tasks', () => {
        const wrapper = shallowMount(TaskList, {
            methods: {
                getTasks: function () {
                    this.tasks = [
                        { id: "1", name: "test-task-1" },
                        { id: "2", name: "test-task-2" },
                        { id: "3", name: "test-task-3" },
                        { id: "4", name: "test-task-4" },
                        { id: "5", name: "test-task-5" }
                    ]
                }
            }
        })

        expect(wrapper.find('.taskList').exists()).toBeTruthy()
        expect(wrapper.findAll('.taskItem').length).toBe(5)
    })
})