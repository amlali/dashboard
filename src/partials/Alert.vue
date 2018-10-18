<template>
    <div>
        <div class="alert alert-warning" role="alert" v-for="msg in messages" >
            {{msg}}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            messages:Array
        }
    }
</script>
