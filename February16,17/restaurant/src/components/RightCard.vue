<template>
    <div class="right-card">
        <div class="detail-wrapper">
            <h1>{{cuisine}}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quasi accusantium. Itaque ad pariatur eos? Laborum, error architecto dicta maiores impedit explicabo cupiditate labore fuga sunt maxime odit ratione nesciunt quisquam rem accusantium hic nihil debitis corrupti rerum culpa deserunt delectus quis. Debitis officia, nesciunt eligendi omnis minima commodi nostrum.</p>
        </div>
        <div class="image-wrapper">
            <img src="../assets/mexican1.jpg" alt="food">
            <img src="../assets/mexican2.jpg" alt="food">
        </div>
    </div>
    <hr>
</template>

<script>
export default{
    name:"RightCard",
    props:{
        cuisine:String
    }
}
</script>


<style scoped>
.right-card{
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-wrap: nowrap;
    margin-block: 50px;
}
.detail-wrapper{
    width: 50%;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 50px;
    color: whitesmoke;
}
.detail-wrapper h1{
    font-size: 2.5em;
}
.detail-wrapper p{
    font-size: 0.9em;
    font-weight: 100;
}
.image-wrapper{
    width: 50%;
}
.image-wrapper img{
    height: 300px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 20px;
}
.image-wrapper img:hover{
    filter: brightness(20%);
}
hr{
    opacity: 0.2;
}
</style>