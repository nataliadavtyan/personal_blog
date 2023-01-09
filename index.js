// +++++ Making the View more button work +++++

const mainGrid = document.getElementById('main-grid')
const viewMoreBtn = document.getElementById('view-more')

viewMoreBtn.addEventListener('click', function(){
    mainGrid.innerHTML += `
                <a href="post-3.html">
                    <article class="blog-post-preview-container">
                        <img class="blog-post-preview-img" src="images/image-3.jpg" alt="A hammock in a green scenery">
                        <p class="blog-post-preview-date">January 6, 2023</p>
                        <h3>Hyperfixating on the project</h3>
                        <p>Learning to code and creating my own projects excite me so much that I forget to eat and five hours can easily pass like five minutes</p>  
                    </article>
                </a>
                
                <a href="post-2.html">
                    <article class="blog-post-preview-container">
                        <img class="blog-post-preview-img" src="images/image-2.jpg" alt="A shelf with yarn organized by colours">
                        <p class="blog-post-preview-date">January 6, 2023</p>
                        <h3>More organised code</h3>
                        <p>Making the code readable for other people and for myself in the future is important for working more efficiently</p>  
                    </article>
                </a>
                
                <a href="post-1.html">
                    <article class="blog-post-preview-container">
                        <img class="blog-post-preview-img" src="images/image-1.jpg" alt="Red traffic light in foggy night">
                        <p class="blog-post-preview-date">January 6, 2023</p>
                        <h3>Know when to stop</h3>
                        <p>It is difficult to resist the temptation to make the project more and more perfect</p>  
                    </article>
                </a>
    `
    
    viewMoreBtn.style.display = 'none'
})