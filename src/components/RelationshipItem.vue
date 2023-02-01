<template>
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <a class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            {{name}}<img :src="img" :alt="name" height="40" width="34">
          </a>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
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
    },
  };
  </script>
  