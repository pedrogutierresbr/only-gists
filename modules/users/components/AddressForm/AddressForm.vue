<script setup lang="ts">
import type { Address } from '@/modules/users/entities/Address/Address'

const props = defineProps<{
  loading: boolean
}>()

const emit = defineEmits<{
  (e: 'trigger-address-search'): void
}>()

const address = defineModel<Address>({
  required: true,
  default: {
    zipCode: '',
    number: '',
    street: '',
    city: '',
    state: '',
    neighborhood: '',
    complement: '',
  },
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col lg:flex-row gap-2">
      <div class="flex flex-col lg:flex-row gap-2 flex-1">
        <div class="flex flex-col gap-2 flex-1">
          <label for="cep">
            CEP
            <i v-if="props.loading" class="pi pi-spinner text-gray-500 animate-spin"></i>
          </label>
          <InputText
            placeholder="00000-000"
            id="cep"
            v-maska
            data-maska="#####-###"
            v-model="address.zipCode"
            @blur="() => emit('trigger-address-search')"
          />
        </div>

        <div class="flex flex-col gap-2 flex-1">
          <label for="number">Número</label>
          <InputText placeholder="" id="number" v-model="address.number" />
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-2">
      <div class="flex flex-col lg:flex-row gap-2 flex-1">
        <div class="flex flex-col gap-2 flex-1">
          <label for="city"> Cidade </label>
          <InputText placeholder="Cidade" id="city" v-model="address.city" />
        </div>

        <div class="flex flex-col gap-2 flex-1">
          <label for="state">Estado</label>
          <InputText placeholder="Estado" id="state" v-model="address.state" />
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-2">
      <div class="flex flex-col lg:flex-row gap-2 flex-1">
        <div class="flex flex-col gap-2 flex-1">
          <label for="neighborhood"> Bairro </label>
          <InputText placeholder="Bairro" id="neighborhood" v-model="address.neighborhood" />
        </div>

        <div class="flex flex-col gap-2 flex-1">
          <label for="complement">Complemento</label>
          <InputText placeholder="Complemento" id="complement" v-model="address.complement" />
        </div>
      </div>
    </div>
  </div>
</template>
