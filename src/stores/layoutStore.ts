import { Ref, ref } from 'vue'

export enum ViewType {
  GRID = 'grid',
  LIST = 'list'
}

export const view: Ref<ViewType> = ref(ViewType.GRID)