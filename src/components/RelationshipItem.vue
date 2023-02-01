<template>
    <div class="accordion-item">
        <h2 class="accordion-header" :id="'flush-heading'+id">
          <a class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapse'+id" aria-expanded="false" :aria-controls="'flush-collapse'+id">
            {{name}}<img :src="img" :alt="name" height="40" width="34">
          </a>
        </h2>
        <div :id="'flush-collapse'+id" class="accordion-collapse collapse" :aria-labelledby="'flush-heading'+id" data-bs-parent="#accordionFlush">
          <div class="accordion-body">
            {{ info }}
          </div>
        </div>
      </div>
</template>
<script lang="ts">
  export default {
    name: 'RelationshipItem',
    props:{
        name:String,
        img:String,
        info:String,
        id:String
    },
  };
  </script>
  