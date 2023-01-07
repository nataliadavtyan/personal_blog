// +++++ Making the View more button work +++++

const mainGrid = document.getElementById('main-grid')
const viewMoreBtn = document.getElementById('view-more')

viewMoreBtn.addEventListener('click', function(){
    mainGrid.innerHTML += `
                <a href="post-3.html">
                    <article class="blog-post-preview-container">
                        <img class="blog-post-preview-img" src="images/image-3.jpg" alt="A hammock in a green scenery">
                        <p class="blog-post-preview-date">January 6, 2023</p>
                        <h3>Blog three</h3>
                        <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>  
                    </article>
                </a>
                
                <a href="post-2.html">
                    <article class="blog-post-preview-container">
                        <img class="blog-post-preview-img" src="images/image-2.jpg" alt="JavaScript code close-up">
                        <p class="blog-post-preview-date">January 6, 2023</p>
                        <h3>Blog two</h3>
                        <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>  
                    </article>
                </a>
                
                <a href="post-1.html">
                    <article class="blog-post-preview-container">
                        <img class="blog-post-preview-img" src="images/image-1.jpg" alt="An open notebook with the word 'one' written in it">
                        <p class="blog-post-preview-date">January 6, 2023</p>
                        <h3>Blog one</h3>
                        <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>  
                    </article>
                </a>
    `
    
    viewMoreBtn.style.display = 'none'
})