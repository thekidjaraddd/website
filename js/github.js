async function getData(){
    let data = await fetch("https://alpha.schooltracker.app/api/repoinfo")
        .then(res => res.json())
        .then(json => json);
    
    data.forEach(function(e){
        var HTML = `<div class="profile">
            <div class="profile-content">
                <div class="profile-pic">
                    <img class="profile-pic-image" src="${e.avatar_url}" />
                </div>
                <a href='${e.url}' class="profile-name">${e.login}</a>
            </div>
        </div>`
        $("#profiles").prepend(HTML);
    });
}

getData()