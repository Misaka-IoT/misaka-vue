<template>
    <div @click="cli($event)" id="SidebarLinkDiv">
        <slot></slot>
    </div>
    
</template>
<script lang="ts">
export default {
    name:"SidebarLink",
    data(){
        return{
            element:document.getElementById("SidebarLinkDiv"),
        };
    },
    created()
    {
    },
    methods:
    {
        cli:function(e:Event)
        {
            if(this.element!=null && this.element.id!="d")
            this.element.style.backgroundColor="rgba(256, 256, 256, 0)";
            this.element=(e.target as HTMLTextAreaElement);
            this.element.style.backgroundColor="rgba(196, 149, 130, 0.7)";
        }
    },  
};
</script>
