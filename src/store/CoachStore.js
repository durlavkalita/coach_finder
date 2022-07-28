import { defineStore } from 'pinia'

export const useCoachStore = defineStore('CoachStore', {
    // state() {
    //     return {
    //         name: 'dk'
    //     }
    // },
    state: () => ({ name: 'dk' }),
    getters: {
        firstName() {
            return this.name[0]
        },
        nameLength: state => state.name.length
    },
    actions: {
        fetchName() {
            return service.getName()
                .then(response => {
                    this.events = response.name
                })
                .catch(error => {
                    throw error
                })
        }
    }
})