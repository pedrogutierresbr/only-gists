<script setup lang="ts">
const visible = defineModel<boolean>('visible')
</script>

<template>
  <Dialog v-model:visible="visible" modal header="Compra efetuada com sucesso!" :style="{ width: '400px' }">
    <div class="m-0 flex flex-col items-center justify-center w-full">
      <i class="pi pi-check-circle text-primary-500 text-6xl my-5"></i>
      <p class="front-[Inter] text-gray-700 text-center">
        Parabéns pela compra! <br />
        Você receberá o gist no e-mail fornecido no checkout!
      </p>
    </div>

    <template #footer>
      <div class="flex justify-center w-full">
        <Button label="Voltar" icon="pi pi-arrow-left" @click="visible=false" autofocus />
      </div>
    </template>
  </Dialog>
</template>
