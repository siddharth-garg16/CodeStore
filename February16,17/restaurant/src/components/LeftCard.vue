<template>
    <div class="left-card">
        <div class="image-wrapper">
            <img src="../assets/italian1.jpg" alt="food">
            <img src="../assets/italian2.jpg" alt="food">
        </div>
        <div class="detail-wrapper">
            <h1>{{ cuisine }}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quia ipsum in sapiente nesciunt, sed, iste
                amet ipsa voluptatem voluptates quibusdam eius minima molestias illo adipisci saepe tempora eaque dolorem?
                Id facere recusandae veritatis. Architecto blanditiis possimus minus corporis, facere porro repellendus
                animi dolorem cupiditate qui ipsum sit, ullam facilis.</p>
        </div>
    </div>
    <hr>
</template>


<script>
export default {
    name: "LeftCard",
    props: {
        cuisine: String
    }
}
</script>


<style scoped>
.left-card {
    margin-left: 20px;
    margin-right: 20px;
    margin-block: 50px;
    display: flex;
    flex-wrap: nowrap;
}

.detail-wrapper {
    width: 50%;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 50px;
    color: whitesmoke;
}

.detail-wrapper h1 {
    font-size: 2.5em;
    font-weight: 700;
    font-family: 'Phudu', cursive;
}

.detail-wrapper h1:hover {
    text-decoration: underline;
    font-size: 3em;
    transition: all .9s ease;
    -webkit-transition: all .9s ease;
}

.detail-wrapper p {
    font-size: 0.9em;
    font-weight: 100;
    font-family: 'Phudu', cursive;
}

.image-wrapper {
    width: 50%;
}

.image-wrapper img {
    height: 300px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 20px;
}

.image-wrapper img:hover {
    filter: brightness(50%);
    transition: all .7s ease;
    -webkit-transition: all .7s ease;
}

hr {
    opacity: 0.2;
}</style>