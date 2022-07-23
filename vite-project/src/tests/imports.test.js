// import { mount } from '@vue/test-utils'
import { describe, it, expect } from "vitest";


describe('import vue components', async () => {
    it('HomeView imports as expected', async () => {
        const cmp = await import('../views/HomeView.vue')
        expect(cmp).toBeDefined()
    })
    it('KanbanView imports as expected', async () => {
        const cmp = await import('../views/KanbanView.vue')
        expect(cmp).toBeDefined()
    })
    
})
