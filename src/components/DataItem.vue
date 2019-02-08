<template>
    <td v-html="addColor" >

    </td>
</template>
<script>
    export default {
        props : ['data'],
        computed : {
            addColor(){
                if (this.data.toString().toLowerCase().indexOf(this.$store.state.searchText.toLowerCase()) > -1 && this.$store.state.searchText){
                    let pos = this.data.toString().toLowerCase().indexOf(this.$store.state.searchText.toLowerCase());
                    let start = this.data.toString().substring(0,pos);
                    let middle = `<span class="red">${this.$store.state.searchText}</span>`;
                    let end = this.data.toString().substring(pos+this.$store.state.searchText.length);

                    return `${start}${middle}${end}`;
                }else return this.data
            }
        },

    }
</script>
<style lang="scss">
    .red{
        color: red;
    }
</style>