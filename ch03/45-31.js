// GET 요청을 위한 비동기함수

const promiseGet = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onload = () => {
            if(xhr.status === 200) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(new Error(xhr.status));
            }
        };
    });
};

const githubIds = ['bonduSeo', 'rlagnswo0505', 'eunjiP'];

Promise.all(githubIds.map(id => promiseGet(`https://api.github.com/users/${id}`)))

    .then(user => user.map(user => user.name))

    .then(console.log)
    .catch(console.error);