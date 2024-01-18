import React, { useEffect, useState } from 'react'

function Movie() {
  const [search, setsearch] = useState("")
  const [record, setRecord] = useState([
    {
      img: 'https://pbs.twimg.com/media/GAUmH4Ua4AACTMq?format=jpg&name=4096x4096',
      name: 'Salar',
      items : 'Upcoming',
      category: 'Action'
    },
    {
      img: 'https://www.boxofficemovies.in/now/wp-content/uploads/WAR-latest-poster.jpg',
      name: 'War',
      items : 'Tranding',
      category: 'Action'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReW53y_aKr-zJx0AUlohd84jb2Fu8hxiVpGA&usqp=CAU',
      name: 'Gudiya',
      items : 'General',
      category: 'Horror'
    },
    {
      img: 'https://m.media-amazon.com/images/M/MV5BMjk4NGZiMzAtODU1NS00MmQ4LWJiNmQtNWU5ZWU4Y2VmNWI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
      name: 'Stree',
      items : 'General',
      category: 'Horror'
    },
    {
      img: 'https://timesofindia.indiatimes.com/photo/91608543.cms',
      name: 'Khushi',
      items : 'Tranding',
      category: 'Romance'
    },
    {
      img: 'https://i.scdn.co/image/ab67616d0000b2732e158802ee406ee3b29073eb',
      name: 'Sita Ramam',
      items : 'Favourites',
      category: 'Romance'
    },
    {
      img: 'https://m.media-amazon.com/images/I/91zTlD7AY1L._AC_UF1000,1000_QL80_.jpg',
      name: 'Animal',
      items : 'Upcoming',
      category: 'Action'
    },
    {
      img: 'https://c.saavncdn.com/015/Love-Ni-Bhavai-Gujarati-2017-500x500.jpg',
      name: 'Love ni bhavay',
      items : 'General',
      category: 'Romance'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzC0Ta2Drn1_BeVNA4qHZA-62YguUcWybAsw&usqp=CAU',
      name: 'Run',
      items :'General',
      category: 'Thriller'
    },
    {
      img: 'https://bollywoodmovieposters.com/wp-content/uploads/2023/09/phir-hera-pheri-movie-poster-old-bollywood.jpg',
      name: 'Phir-Hera-Pheri',
      items : 'Favourites',
      category: 'Comedy'
    },
    {
      img: 'https://www.scrolldroll.com/wp-content/uploads/2022/10/khichdi-the-movie-hindi-comedy-movies-on-hotstar.jpg',
      name: 'Khichdi',
      items : 'Favourites',
      category: 'Comedy'
    },
    {
      img: 'https://m.media-amazon.com/images/M/MV5BMTg3MTMzNjUwOF5BMl5BanBnXkFtZTcwODgxODMzMQ@@._V1_.jpg',
      name: 'Chup Chup Ke',
      items : 'Favourites',
      category: 'Comedy'
    },
    {
      img: 'https://data1.ibtimes.co.in/photo/en/full/44079/aamir-khans-dangal-first-look-poster-revealed.jpg?w=900',
      name: 'Dangal',
      items : 'General',
      category: 'Drama'
    },
    {
      img: 'https://wallpapercave.com/wp/wp9068484.jpg',
      name: 'Hindi',
      items : 'General',
      category: 'Drama'
    },
    {
      img: 'https://www.filmposters.com/images/posters/21849.jpg',
      name: 'Toy Story',
      items : 'Tranding',
      category: 'Animation'
    },
    {
      img: 'https://cdn.abcotvs.com/dip/images/413470_112614-cc-disney-posters-frozen-img.jpg',
      name: 'Frozen',
      items : 'General',
      category: 'Animation'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Z5uOPOPmV9-MLxkQBn0juW4GcyzILJDgUg&usqp=CAU',
      name: 'Killer',
      items : 'Tranding',
      category: 'Crime'
    },
    {
      img: 'https://i0.wp.com/teaser-trailer.com/wp-content/uploads/Dark-Crimes-.jpg?ssl=1',
      name: 'Dark Crimes',
      items : 'General',
      category: 'Crime'
    },
    {
      img: 'https://static.toiimg.com/photo/100783941.cms',
      name: 'Adipurush',
      items : 'General',
      category: 'History'
    },
    {
      img: 'https://www.tallengestore.com/cdn/shop/products/Padmaavat-DeepikaPadukone-BollywoodHindiMoviePosters_75046377-ac14-46a1-9790-33f53723e3f6_large.jpg?v=1625220954',
      name: 'Padmavat',
      items : 'General',
      category: 'History'
    },
    {
      img: 'https://m.media-amazon.com/images/M/MV5BMTc2NDQ5OTIzNl5BMl5BanBnXkFtZTgwMTI5ODUzNzE@._V1_FMjpg_UX1000_.jpg',
      name: 'Hum Sath Sath Haii',
      items : 'Favourites',
      category: 'Family'
    },
    {
      img: 'https://image.songsuno.com/movie-images/original/movie/hum-aapke-hain-kaun/hum-aapke-hain-kaun-poster.jpg',
      name: 'Hum Apke Hai Koun..!',
      items : 'General',
      category: 'Family'
    },
    {
      img: 'https://i.pinimg.com/736x/aa/92/13/aa92130b5dcbb96bd933c40ae7d798e2.jpg',
      name: 'Hanuman',
      items : 'Upcoming',
      category: 'History'
    }

  ]);

  useEffect(() => {
    let rec = [...record];
    let movirecord = localStorage.setItem('user', JSON.stringify(rec))
    setRecord(movirecord);
  }, [])

  useEffect(() => {
    let oldrecrod = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setRecord(oldrecrod)
  }, [])

  useEffect(() => {
    if (search.length === 0) {
      let all = JSON.parse(localStorage.getItem('user'));
      setRecord(all)
    }
    else {
      const srch = record.filter(value => value.name.toLowerCase().includes(search.toLowerCase()))
      setRecord(srch)
      console.log(srch);
    }
  }, [search])

  const All = () => {
    let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setRecord(all)
  }

  const Action = () => {
    let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setRecord(all)
    let ans = all.filter((val) => {
      return val.category === 'Action'
    })
    setRecord(ans)
  }

  const animation = () => {
    let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setRecord(all)
    let ans = all.filter((val) => {
      return val.category === "Animation"
    })
    setRecord(ans)
  }

  const Comedy = () => {
    let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setRecord(all)
    let ans = all.filter((val) => {
      return val.category === "Comedy"
    })
    setRecord(ans)
  }

  const Crime = () => {
    let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setRecord(all)
    let ans = all.filter((val) => {
      return val.category === "Crime"
    })
    setRecord(ans)
  }

  const Drama = () => {
    let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setRecord(all)
    let ans = all.filter((val) => {
      return val.category === "Drama"
    })
    setRecord(ans)
  }

  const Family = () => {
    let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setRecord(all)
    let ans = all.filter((val) => {
      return val.category === "Family"
    })
    setRecord(ans)
  }

  const Horror = () => {
    let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setRecord(all)
    let ans = all.filter((val) => {
      return val.category === "Horror"
    })
    setRecord(ans)
  }

  const history = () => {
    let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setRecord(all)
    let ans = all.filter((val) => {
      return val.category === "History"
    })
    setRecord(ans)
  }

  const Thriller = () => {
    let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setRecord(all)
    let ans = all.filter((val) => {
      return val.category === "Thriller"
    })
    setRecord(ans)
  }

  const Romance = () => {
    let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setRecord(all)
    let ans = all.filter((val) => {
      return val.category === "Romance"
    })
    setRecord(ans)
  }

  const General = () => {
    let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setRecord(all)
  }

  const Trending = () => {
    let status = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setRecord(status)
    let ans = status.filter((val) => {
      return val.items === 'Tranding'
    })
    setRecord(ans)
  }

  const Upcoming = () => {
    let status = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setRecord(status)
    let ans = status.filter((val) => {
      return val.items === 'Upcoming'
    })
    setRecord(ans)
  }

  const Favourites = () => {
    let status = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setRecord(status)
    let ans = status.filter((val) => {
      return val.items === 'Favourites'
    })
    setRecord(ans)
  }

  return (

    <div>
      <div style={{ width: '250px', backgroundColor: "black", position: 'fixed', padding: "10px", height: "100vh", width: '20%', color: 'grey', textAlign: 'center' }}>
        <div className="img">
          <img src="https://i.pinimg.com/originals/b9/87/34/b987348a7f4666f9ff5ea91bb4fb9532.jpg" width={250} />
          <h2>Bluebirds Movie</h2>
        </div>

        <div className="button" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '75px 0 120px' }}>
          <button
            style={{ borderRadius: '7px', width: '60%', marginBottom: '10px', border: '1px solid black', background: '#8265fe', color: 'white', height: '40px', fontSize: '20px' }} onClick={ () => General()}>
            General
          </button>
          <button
            style={{ borderRadius: '7px', width: '60%', marginBottom: '10px', border: '1px solid black', background: '#8265fe', color: 'white', height: '40px', fontSize: '20px' }} onClick={ () => Trending()}>
            Trending
          </button>
          <button
            style={{ borderRadius: '7px', width: '60%', marginBottom: '10px', border: '1px solid black', background: '#8265fe', color: 'white', height: '40px', fontSize: '20px' }} onClick={ () => Upcoming()}>
            Upcoming
          </button>
          <button
            style={{ borderRadius: '7px', width: '60%', marginBottom: '10px', border: '1px solid black', background: '#8265fe', color: 'white', height: '40px', fontSize: '20px' }} onClick={ () => Favourites()}>
            Favourites
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{ borderRadius: '10px', border: '1px solid black', background: '#8265fe', color: 'white', width: '80%', height: '35px', fontSize: '18px' }}>Login</button>
        </div>
      </div>
      <div style={{ marginLeft: '250px', background: "linear-gradient(90deg, rgba(83,90,107,1) 0%, rgba(51,87,168,1) 40%, rgba(181,47,241,1) 100%)", padding: "100px" }} className='text-center'>

        <input type="text" placeholder='Search' style={{ width: "50%", border: "none", borderRadius: '10px' }} className='px-2 py-2' onChange={(e) => setsearch(e.target.value)} value={search} />
      </div>

      <div style={{ marginLeft: '250px' }}>
        <div style={{ flexWrap: 'wrap', paddingTop: '60px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <button style={{ marginRight: '10px', marginBottom: '20px', width: '100px', border: 'none', background: '#8265fe', fontWeight: '500', height: '40px', fontSize: '18px', color: 'white', borderRadius: '10px' }} onClick={() => All()}>All</button>

          <button style={{ marginRight: '10px', marginBottom: '20px', width: '100px', border: 'none', background: '#8265fe', fontWeight: '500', height: '40px', fontSize: '18px', color: 'white', borderRadius: '10px' }} onClick={() => Action()}> Action</button>

          <button style={{ marginRight: '10px', marginBottom: '20px', width: '100px', border: 'none', background: '#8265fe', fontWeight: '500', height: '40px', fontSize: '18px', color: 'white', borderRadius: '10px' }} onClick={() => animation()}>Animation</button>

          <button style={{ marginRight: '10px', marginBottom: '20px', width: '100px', border: 'none', background: '#8265fe', fontWeight: '500', height: '40px', fontSize: '18px', color: 'white', borderRadius: '10px' }} onClick={() => Comedy()}> Comedy</button>

          <button style={{ marginRight: '10px', marginBottom: '20px', width: '100px', border: 'none', background: '#8265fe', fontWeight: '500', height: '40px', fontSize: '18px', color: 'white', borderRadius: '10px' }} onClick={() => Crime()}>Crime</button>

          <button style={{ marginRight: '10px', marginBottom: '20px', width: '100px', border: 'none', background: '#8265fe', fontWeight: '500', height: '40px', fontSize: '18px', color: 'white', borderRadius: '10px' }} onClick={() => Drama()}>Drama</button>

          <button style={{ marginRight: '10px', marginBottom: '20px', width: '100px', border: 'none', background: '#8265fe', fontWeight: '500', height: '40px', fontSize: '18px', color: 'white', borderRadius: '10px' }} onClick={() => Family()}> Family</button>

          <button style={{ marginRight: '10px', marginBottom: '20px', width: '100px', border: 'none', background: '#8265fe', fontWeight: '500', height: '40px', fontSize: '18px', color: 'white', borderRadius: '10px' }} onClick={() => Horror()}> Horror</button>

          <button style={{ marginRight: '10px', marginBottom: '20px', width: '100px', border: 'none', background: '#8265fe', fontWeight: '500', height: '40px', fontSize: '18px', color: 'white', borderRadius: '10px' }} onClick={() => history()} >History</button>

          <button style={{ marginRight: '10px', marginBottom: '20px', width: '100px', border: 'none', background: '#8265fe', fontWeight: '500', height: '40px', fontSize: '18px', color: 'white', borderRadius: '10px' }} onClick={() => Thriller()}>Thriller</button>

          <button style={{ marginRight: '10px', marginBottom: '20px', width: '100px', border: 'none', background: '#8265fe', fontWeight: '500', height: '40px', fontSize: '18px', color: 'white', borderRadius: '10px' }} onClick={() => Romance()} >Romance</button>

        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
          {
            record && record.map((val) => {
              return (
                <div className="card m-2 shadow-lg p-3 mb-5" style={{ width: '18rem', borderRadius: '20px', backgroundColor: 'transparent' }}>
                  <img src={val.img} style={{ height: '300px', objectFit: 'cover', marginTop: '20px' }} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-white">{val.name}</h5>
                    <p className="card-text text-white">Type :- {val.category}</p>
                    <p className="card-text text-white">Items :- {val.items}</p>
                    <a href="#" className="btn btn-primary" style={{ background: '#8265fe', border: 'none', fontSize: '18px' }}>Book a Ticket</a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Movie