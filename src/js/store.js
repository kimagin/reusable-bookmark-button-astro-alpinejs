import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
Alpine.plugin(persist)
document.addEventListener('alpine:init', () => {
  Alpine.store('bookmarks', {
    init() {},
    list: Alpine.$persist([]).as('bookmarks'),
  })
})
