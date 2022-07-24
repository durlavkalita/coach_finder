import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Durlav',
                    lastName: 'Kalita',
                    areas: ['frontend', 'backend'],
                    description: 'Vue.js is an awesome JavaScript Framework for building Frontend Applications!',
                    hourlyRate: 30,
                },
                {
                    id: 'c2',
                    firstName: 'Bobby',
                    lastName: 'Fischer',
                    areas: ['backend'],
                    description: 'Vue.js is an awesome JavaScript Framework for building Frontend Applications!',
                    hourlyRate: 50,
                },
                {
                    id: 'c3',
                    firstName: 'Linus',
                    lastName: 'Torvalds',
                    areas: ['programming'],
                    description: 'Vue.js is an awesome JavaScript Framework for building Frontend Applications!',
                    hourlyRate: 20,
                }
            ]
        }
    },
    mutations,
    getters,
    actions
};