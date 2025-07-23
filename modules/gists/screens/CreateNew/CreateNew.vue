<script setup lang="ts">
import { myselfKey } from '@/modules/users/composables/useMyself/useMyself'
import type { MySelfContextProvider } from '@/modules/users/composables/useMyself/types'

const { user, loading } = inject(myselfKey) as MySelfContextProvider
</script>

<template>
  create new 
  {{ user }}
</template>
