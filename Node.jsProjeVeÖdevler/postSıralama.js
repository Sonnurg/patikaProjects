let posts = [
    { title: 'post 1', author: 'author 1', date: '2018' },
    { title: 'post 2', author: 'author 2', date: '2019' },
    { title: 'post 3', author: 'author 3', date: '2020' },
    { title: 'post 4', author: 'author 4', date: '2021' },
]

function addPost(p) {
    let promise1 = new Promise((resolve, reject) => {
        if (p.title !== '') {
            posts.push(p);
            resolve(posts);
        } else {
            reject("Bir Hata Oluştu");
        }
    })
    return promise1
}
function listPosts() {
    posts.map(x => {
        console.log(x.title + ">" + x.author + ">" + x.date)
    })
}
async function ShowPosts() {
    try {
            await addPost({ title: 'post 5', author: 'author 5', date: '2022' })
            listPosts()
    } catch (error) {
        console.log(error);
    }
}
ShowPosts()
