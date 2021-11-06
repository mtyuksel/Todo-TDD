import { pactWith } from 'jest-pact'
import { Matchers } from '@pact-foundation/pact'
import { getAll, add } from '../../test-utils/mocks/TodoServiceMock'

pactWith(
    {
        consumer: 'frontend',
        provider: 'backend',
        cors: true,
        pactfileWriteMode: 'merge',
        port: 9001
    },
    (provider) => {
        describe('Frontend and Backend todo tests', () => {
            test('get all tasks result', async () => {
                await provider.addInteraction({
                    state: 'i have not empty tasks',
                    uponReceiving: 'A request for get all tasks',
                    withRequest: {
                        method: 'GET',
                        path: '/tasks/getall',
                    },
                    willRespondWith: {
                        status: 200,
                        body:
                        {
                            success: true,
                            message: Matchers.like(''),
                            data: {
                                todolist: Matchers.like([
                                    {
                                        id: Matchers.like('1'),
                                        name: Matchers.like('Buy some milk'),
                                    },
                                    {
                                        id: Matchers.like('2'),
                                        name: Matchers.like('Visit parents'),
                                    },
                                    {
                                        id: Matchers.like('3'),
                                        name: Matchers.like('Do homewoks'),
                                    },
                                ]),
                            }
                        }
                    },
                })

                let data = []

                await getAll().then((res) => {
                    console.log('***********', res.data.data.todolist)
                    data = res.data.data.todolist
                })

                expect(data).toEqual(
                    [
                        {
                            id: '1',
                            name: 'Buy some milk'
                        },
                        {
                            id: '2',
                            name: 'Visit parents'
                        },
                        {
                            id: '3',
                            name: 'Do homewoks'
                        },
                    ]
                )
            })

            test('add new task result', async () => {
                await provider.addInteraction({
                    state: 'i have a task',
                    uponReceiving: 'A request for add new task',
                    withRequest: {
                        method: 'POST',
                        path: '/tasks/add',
                        body: {
                            name: 'Buy some milk',
                        },
                    },
                    willRespondWith: {
                        status: 201,
                        body:
                        {
                            success: true,
                            message: Matchers.like(''),
                            data: {
                                todo: {
                                    id: Matchers.like('1'),
                                    name: Matchers.like('Buy some milk'),
                                }
                            }
                        },
                    },
                })

                let taskName = 'Buy some milk'
                let data = {}

                await add(taskName).then((res) => {
                    data = res.data.data.todo
                })

                expect(data).toEqual(
                    {
                        id: "1",
                        name: "Buy some milk"
                    },
                )
            })
        })
    }
)