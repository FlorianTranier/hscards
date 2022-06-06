import { Ref, ref } from 'vue'

export type ViewType = 'grid' | 'list'

export const view: Ref<ViewType> = ref('list')