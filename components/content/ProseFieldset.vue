<template>
  <fieldset class="border-2 border-current mx-8">
    <legend class="font-pacifico mx-4 px-4 text-2xl">
      <content-slot :use="$slots.legend" unwrap="p" />
    </legend>
    <div class="text-neutral-800">
      <content-slot :use="$slots.default" unwrap="p" />
    </div>
  </fieldset>
</template>

<script setup lang="ts">
defineProps<{
  legendClass?: string
}>();
</script>
