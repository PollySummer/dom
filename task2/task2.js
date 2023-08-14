const people = [
    {
        name: 'Jack',
        surname: 'Smith',
        profilePic: 'http://picsum.photos/300/300'
    },
    {
        name: 'Mary',
        surname: 'Gold',
        profilePic: 'http://picsum.photos/301/301'
    },
    {
        name: 'Sarah',
        surname: 'Connor',
        profilePic: 'http://picsum.photos/299/299'
    }
]

const bgBody = document.querySelector('.persons');

for (let i = 0; i < people.length; i++) {

    let myImg = document.createElement('img');
    myImg.src = people[i].profilePic;

    bgBody.append(myImg);

    let newP = document.createElement('p');
    newP.innerText = people[i].name + " " + people[i].surname;

    bgBody.append(newP);

}
