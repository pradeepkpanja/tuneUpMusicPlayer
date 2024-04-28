/**Music system controller master play */

const music = new Audio('audio/1.mp3');
//music.play();

/**Creating an array for on song selection posters at the bottom *//*/making a json file*/
const songs = [
    /*Creating object for each song to make it a directory  */
    {
        id: 1,
        songName: `On My Way <br>
        <div class="subtitle">Alan Walker</div>` ,
        poster: "img/1.jpg"
    },
    {
        id: 2,
        songName: `Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>` ,
        poster: "img/2.jpg"
    },

    {
        id: 3,
        songName: `Cartoon - On & On <br>
        <div class="subtitle">Daniel Levi</div>` ,
        poster: "img/3.jpg"
    },
    {
        id: 4,
        songName: `Warriyo - Mortals <br>
        <div class="subtitle">Mortals</div>` ,
        poster: "img/4.jpg"
    },
    {
        id: 5,
        songName: `Ertugrul Gazi <br>
        <div class="subtitle">Ertugrul</div>` ,
        poster: "img/5.jpg"
    },
    {
        id: 6,
        songName: `Electronic Music <br>
        <div class="subtitle">Electro</div>` ,
        poster: "img/6.jpg"
    },
    {
        id: 7,
        songName: `Agar Tum Saath Ho <br>
        <div class="subtitle">Tamashaa</div>` ,
        poster: "img/7.jpg"
    },
    {
        id: 8,
        songName: `Suna Hai <br>
        <div class="subtitle">Neha Kakkar</div>` ,
        poster: "img/8.jpg"
    },
    {
        id: 9,
        songName: `Dilbar <br>
        <div class="subtitle">Satyameva Jayate</div>` ,
        poster: "img/9.jpg"
    },
    {
        id: 10,
        songName: `Duniya <br>
        <div class="subtitle">Luka Chuppi</div>` ,
        poster: "img/10.jpg"
    },
    {
        id: 11,
        songName: `Lagdi Lahore Di <br>
        <div class="subtitle">Street Dancer</div>` ,
        poster: "img/11.jpg"
    },
    {
        id: 12,
        songName: `Putt Jatt Da<br>
        <div class="subtitle">Diljit Dosanjh</div>` ,
        poster: "img/12.jpg"
    },
    {
        id: 13,
        songName: `Baarishen <br>
        <div class="subtitle">Atif Ashlam</div>` ,
        poster: "img/13.jpg"
    },
    {
        id: 14,
        songName: `Vaaste <br>
        <div class="subtitle">Dhvani Bhanusali</div>` ,
        poster: "img/14.jpg"
    },
    {
        id: 15,
        songName: `Lut Gaye <br>
        <div class="subtitle">Jubin Nautiyal</div>` ,
        poster: "img/15.jpg"
    },
    {
        id: 16,
        songName: `Tu Meri Zindagi <br>
        <div class="subtitle">Jubin Nautiyal</div>` ,
        poster: "img/16.jpg"
    },
    {
        id: 17,
        songName: `Batao Yaad Hai tumko <br>
        <div class="subtitle">Rahat Fateh Ali Khan</div>` ,
        poster: "img/17.jpg"
    },
    {
        id: 18,
        songName: `Pasoori <br>
        <div class="subtitle">Ali Sethi Seha Gill</div>` ,
        poster: "img/18.jpg"
    },
    {
        id: 19,
        songName: `Insane <br>
        <div class="subtitle">AP Dhillon, Gurinder Gill, Shinda Kahlon </div>` ,
        poster: "img/19.jpg"
    },
    {
        id: 20,
        songName: `You <br>
        <div class="subtitle">Armaan Malik</div>` ,
        poster: "img/20.jpg"
    },
    

    /**To add music copy and paste the below code and 
     * change the id and add element in song element panel in index.html 
     *  {
        id:1,
        songName :`On My Way <br>
        <div class="subtitle">Alan Walker</div>` ,
        poster : "img/1.jpg"
    },
     * 
     */
];

/**make array of song item   */

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

/**search bar in action */
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const { id, songName, poster } = element;

    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;

    card.innerHTML = `
    
    <img src="${poster}" alt="">
    <div class="content">
      ${songName} 
    </div>

    `;
    search_results.appendChild(card)
});


let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";

        } else {
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            search_results.style.display = "none";
        }
        else {
            search_results.style.display = "";
        }


    }
})

/**end search data */



let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
})

/**Change all hover colors of playListPlay */
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

/**Change all hover colors of side panel */
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb( 105, 105, 105, .0)';
    })
}

/**Target on particular id with index increament */
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        download_music.href = `audio/${index}.mp3`;

        /**changing song titles on play */
        let songTitles = songs.filter((els) => {
            return els.id == index;
        })
        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        })
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,0.1)';
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    })
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

/*Main event play down */
music.addEventListener('timeupdate', () => {

    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

})
/**On scroll play that particular part */
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;

})

/**On scroll volume increase*/
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementById('vol_bar');
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }


    vol_bar.style.width = `${vol.value}%`;
    vol_dot.style.left = `${vol.value}%`;
    music.volume = vol.value / 100;

})

/**Next and back option  */
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    music.play();
    /**changing song titles on play */
    let songTitles = songs.filter((els) => {
        return els.id == index;
    })
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    })
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,0.1)';
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    music.play();
    /**changing song titles on play */
    let songTitles = songs.filter((els) => {
        return els.id == index;
    })
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    })
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,0.1)';
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add("active1");
})


/**Scroll the popular sonngs panel */
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

/** Using arrow function adding a event listener */
pop_song_right.addEventListener('click', () => {
    /**scroll left on click */
    pop_song.scrollLeft += 300;
})

pop_song_left.addEventListener('click', () => {
    /**scroll right on click */
    pop_song.scrollLeft -= 300;
})

/**Scroll the popular artists panel */
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

/** Using arrow function adding a event listener */
pop_art_right.addEventListener('click', () => {
    /**scroll left on click */
    Artists_bx.scrollLeft += 330;
})

pop_art_left.addEventListener('click', () => {
    /**scroll right on click */
    Artists_bx.scrollLeft -= 330;
})


/**Shuffle function */

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;

        default:
            break;
    }
});



/**make the shuflle work with three functions 
 * 1.Next
 * 2.Repeat
 * 3.Random
*/

const next_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index++;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    download_music.href = `audio/${index}.mp3`;

    /**changing song titles on play */
    let songTitles = songs.filter((els) => {
        return els.id == index;
    })
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,0.1)';
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    download_music.href = `audio/${index}.mp3`;

    /**changing song titles on play */
    let songTitles = songs.filter((els) => {
        return els.id == index;
    })
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,0.1)';
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const random_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    download_music.href = `audio/${index}.mp3`;

    /**changing song titles on play */
    let songTitles = songs.filter((els) => {
        return els.id == index;
    })
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,0.1)';
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

/**Play the next song after one is ended */
music.addEventListener('ended', () => {
    // index++;
    let b = shuffle.innerHTML;
    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;

        default:
            break;
    }
})