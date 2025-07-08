<script setup lang="ts">
import { myselfKey } from '~/modules/users/composables/useMyself/useMyself';
import type { MySelfContextProvider } from '~/modules/users/composables/useMyself/types';

const {user} = inject(myselfKey) as MySelfContextProvider

</script>

<template>
  Panel
</template>