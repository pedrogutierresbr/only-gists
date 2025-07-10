<script setup lang="ts">
import HeadlineEdit from '@/modules/users/components/HeadlineEdit/HeadlineEdit.vue'
import HeadlineEditLoader from '@/modules/users/components/HeadlineEdit/Loader.vue'
import BasicInfoForm from '@/modules/users/components/BasicInfoForm/BasicInfoForm.vue'
import AddressForm from '@/modules/users/components/AddressForm/AddressForm.vue'
import { myselfKey } from '@/modules/users/composables/useMyself/useMyself'
import type { MySelfContextProvider } from '@/modules/users/composables/useMyself/types'

const { user, loading } = inject(myselfKey) as MySelfContextProvider

const handleShare = () => {}
const handleNavigateToProfile = () => {}
</script>

<template>
  <HeadlineEditLoader :loading="loading">
    <HeadlineEdit
      :username="user?.username!"
      :avatar-url="user?.avatarUrl!"
      class="my-10"
      @share="handleShare"
      @navigate-to-profile="handleNavigateToProfile"
    />

    <WidgetDefault title="Informações básicas">
      <BasicInfoForm />
    </WidgetDefault>

    <WidgetDefault title="Endereço" class="mt-5">
      <AddressForm />
    </WidgetDefault>
  </HeadlineEditLoader>
</template>