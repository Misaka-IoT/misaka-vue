<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <MisakaLogin :on="on" @LoginSwich="But"></MisakaLogin>
    <button class="icon-btn standard no-color" :onClick="But">
        <Icon icon="material-symbols:login" width="24" height="24" />
    </button>
</template>
<script lang="ts">
import MisakaLogin from './MisakaLogin.vue';
    export default {
    name: 'LoginButton',
    data() {
        return {
            on:false
        };
    },
    methods: {
        But()
        {
            this.on=!this.on
        }
    },
    created() {
    },
    components :{MisakaLogin},
    };
</script>
      