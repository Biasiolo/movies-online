$(document).ready(function () {
    // Lista de filmes
    const movies = [
        {
            title: "O Iluminado",
            year: 1980,
            genre: "Suspense/Terror",
            img: "https://image.tmdb.org/t/p/w300/7ceEaLciLfksJkSHqp0vLE5eLyy.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0081505"
        },
        {
            title: "A Vida é Bela",
            year: 1997,
            genre: "Comédia/Drama",
            img: "https://image.tmdb.org/t/p/w300/h8PEObIiYUo4wHGo2qgWge2wqzv.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0118799"
        },
        {
            title: "Oppenheimer",
            year: 2023,
            genre: "Drama/História",
            img: "https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
            src: "https://embedder.net/e/movie?imdb=tt15398776"
        },
        {
            title: "2001: Uma Odisséia no Espaço",
            year: 1968,
            genre: "Ficção/Aventura",
            img: "https://image.tmdb.org/t/p/w300/66cLRuqg7dLXRgvgk427leeZhjd.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0062622"
        },
        {
            title: "Taxi Driver",
            year: 1976,
            genre: "Crime/Drama",
            img: "https://image.tmdb.org/t/p/w300/wOi8s0WQZYlTDkWB46Z6p3ji5Fq.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0075314"
        },
        {
            title: "Kill Bill: Volume 1",
            year: 2003,
            genre: "Ação/Crime",
            img: "https://image.tmdb.org/t/p/w300/oj0ibkqKGJ3CvSTb3Pkx299P0SK.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0266697"
        },
        {
            title: "Laranja Mecânica",
            year: 1971,
            genre: "Ficção/Drama",
            img: "https://image.tmdb.org/t/p/w300/tNgmc9kKLPYn78yTWZ50omc4QVb.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0066921"
        },
        {
            title: "Sociedade dos Poetas Mortos",
            year: 1989,
            genre: "Drama",
            img: "https://image.tmdb.org/t/p/w300/ufmT4SaTd0vfTRIsUIVpgckridb.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0097165"
        },
        {
            title: "Coringa",
            year: 2019,
            genre: "Crime/Drama",
            img: "https://image.tmdb.org/t/p/w300/xLxgVxFWvb9hhUyCDDXxRPPnFck.jpg",
            src: "https://embedder.net/e/movie?imdb=tt7286456"
        },
        {
            title: "O Silêncio dos Inocentes",
            year: 1991,
            genre: "Drama",
            img: "https://image.tmdb.org/t/p/w300/paGUSTwcFrAxpGV1hSQ2wsI28id.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0102926"
        },
        {
            title: "Pulp Fiction",
            year: 1994,
            genre: "Crime/Drama",
            img: "https://image.tmdb.org/t/p/w300/tptjnB2LDbuUWya9Cx5sQtv5hqb.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0110912"
        },
        {
            title: "O Poderoso Chefão",
            year: 1972,
            genre: "Crime/Drama",
            img: "https://image.tmdb.org/t/p/w300/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0068646"
        },
        {
            title: "O Poderoso Chefão 2",
            year: 1974,
            genre: "Crime/Drama",
            img: "https://image.tmdb.org/t/p/w300/3ViYPhSAPwH2avQjdMl49F8PklB.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0071562"
        },
        {
            title: "O Poderoso Chefão 3",
            year: 1990,
            genre: "Crime/Drama",
            img: "https://image.tmdb.org/t/p/w300/y8GROCjgD8amoFufSx2USKrOy7d.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0099674"
        },
        {
            title: "Edward Mãos de Tesoura",
            year: 1990,
            genre: "Drama/Fantasia",
            img: "https://image.tmdb.org/t/p/w300/8vmYMcvWaqqhEWt9EnTPdXDdy2F.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0099487"
        },
        
        {
            title: "Réquiem para um Sonho",
            year: 2000,
            genre: "Crime/Drama",
            img: "https://image.tmdb.org/t/p/w300/1XoWfP4l4X7sQMH8dhVQOWc91Pd.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0180093"
        },
        {
            title: "Parasita",
            year: 2019,
            genre: "Comédia/Drama",
            img: "https://image.tmdb.org/t/p/w300/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg",
            src: "https://embedder.net/e/movie?imdb=tt6751668"
        },
        {
            title: "Bastardos Inglórios",
            year: 2009,
            genre: "Ação/Drama",
            img: "https://image.tmdb.org/t/p/w300/6UjYycIR6VLYgggfNpmSPJHmFS0.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0361748"
        },
        {
            title: "Os Bons Companheiros",
            year: 1990,
            genre: "Crime/Drama",
            img: "https://image.tmdb.org/t/p/w300/fnJcBTbNNUkcNmjqc7fF5ozzLDk.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0099685"
        },
        {
            title: "Julgamento em Nuremberg",
            year: 1961,
            genre: "Drama",
            img: "https://image.tmdb.org/t/p/w300/3ollXGoWPfbZZrNCLH6Y7o3ufoU.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0055031"
        },
        {
            title: "O Clube de Apostas",
            year: 2022,
            genre: "Crime/Drama",
            img: "https://image.tmdb.org/t/p/w300/ljS9zHjqilgvqfuzcrGqrK9E8N9.jpg",
            src: "https://embedder.net/e/movie?imdb=tt12223548"
        },
        {
            title: "Diário de um Adolescente",
            year: 1995,
            genre: "Crime/Drama",
            img: "https://image.tmdb.org/t/p/w300/mdQoyPS3QICr3texSpvNqkdmqD.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0112461"
        },
        {
            title: "O Labirinto do Fauno",
            year: 2006,
            genre: "Fantasia",
            img: "https://image.tmdb.org/t/p/w300/53ZMT8Y18gwLpInzRLMEebAZxew.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0457430"
        },
        {
            title: "Mad Max",
            year: 1979,
            genre: "Ação/Ficção",
            img: "https://image.tmdb.org/t/p/w300/hdQqa9ZfmEPbE4q62lntueI2CUM.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0079501"
        },
        {
            title: "A Era de Ouro",
            year: 2023,
            genre: "Drama",
            img: "https://image.tmdb.org/t/p/w300/p7HiwisHEP9l1bF3LMnoF3R63nn.jpg",
            src: "https://embedder.net/e/movie?imdb=tt2071590"
        },
        {
            title: "O Bebê de Rosemary",
            year: 1968,
            genre: "Terror/Drama",
            img: "https://image.tmdb.org/t/p/w300/v9OaZXIFgAmgYPDcs06kks0c1Fr.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0063522"
        },
        {
            title: "E.T.: O Extraterrestre",
            year: 1982,
            genre: "Fantasia/Ficção",
            img: "https://image.tmdb.org/t/p/w300/8j5igb0iuV9TYudw9SuMV5GT9K9.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0083866"
        },
        {
            title: "Dalíland",
            year: 2022,
            genre: "Drama/História",
            img: "https://image.tmdb.org/t/p/w300/4RE6PmgeE6Kz0fur2oiiYZ50R0c.jpg",
            src: "https://embedder.net/e/movie?imdb=tt8399658"
        },
        {
            title: "Platoon",
            year: 1986,
            genre: "Ação",
            img: "https://image.tmdb.org/t/p/w300/lTwR2lFlU9MITmornRYbihksyLt.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0091763"
        },
        {
            title: "Os 12 Macacos",
            year: 1995,
            genre: "Ficção",
            img: "https://image.tmdb.org/t/p/w300/rAjErpTZ5MT5aOIP0TooLwcfmzm.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0114746"
        },
        {
            title: "O Nome da Rosa",
            year: 1986,
            genre: "Drama",
            img: "https://image.tmdb.org/t/p/w300/8o6U4vBbAop4344tMnzdu8pN7Qy.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0091605"
        },
        {
            title: "Bob Marley: One Love",
            year: 2024,
            genre: "Drama",
            img: "https://image.tmdb.org/t/p/w300/mKWalirPreEdCKDJjc5TKeOP2xi.jpg",
            src: "https://embedder.net/e/movie?imdb=tt8521778"
        },
        {
            title: "O Tigre e o Dragão",
            year: 1997,
            genre: "Aventura/Drama",
            img: "https://image.tmdb.org/t/p/w300/6ZPfaWGAir5qgGK0VfBOzOqB3yF.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0190332"
        },
        {
            title: "Napoleão",
            year: 2023,
            genre: "Drama/História",
            img: "https://image.tmdb.org/t/p/w300/5lkM8eyWLdzHwvhB1jBUxpCLmLR.jpg",
            src: "https://embedder.net/e/movie?imdb=tt13287846"
        },
        {
            title: "Malcolm X",
            year: 1992,
            genre: "Drama",
            img: "https://image.tmdb.org/t/p/w300/ttcqfFRLsGxStkTd5YjfMD2uKv0.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0104797"
        },
        {
            title: "O Irlandês",
            year: 2019,
            genre: "Crime/Drama",
            img: "https://image.tmdb.org/t/p/w300/mFyQRQoUh8InlwmE5fRd9LOBRZ1.jpg",
            src: "https://embedder.net/e/movie?imdb=tt1302006"
        },
        {
            title: "Cães de Aluguel",
            year: 1992,
            genre: "Crime/Drama",
            img: "https://image.tmdb.org/t/p/w300/84dzLDiFiACIqKtqQwzmB6GL7uC.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0105236"
        },
        {
            title: "O Senhor dos Anéis",
            year: 2001,
            genre: "Aventura/Ficção",
            img: "https://image.tmdb.org/t/p/w300/omoMXT3Z7XrQwRZ2OGJGNWbdeEl.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0120737"
        },
        {
            title: "O Senhor dos Anéis 2",
            year: 2002,
            genre: "Aventura/Ficção",
            img: "https://image.tmdb.org/t/p/w300/20eUL6eN89SM0U7KPDw8iR82mOT.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0167261"
        },
        {
            title: "O Senhor dos Anéis 3",
            year: 2003,
            genre: "Aventura/Ficção",
            img: "https://image.tmdb.org/t/p/w300/izPNMzffsgZUvlbiYlPxjFr3TAa.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0167260"
        },
        {
            title: "Um Dia de Fúria",
            year: 1993,
            genre: "Crime/Drama",
            img: "https://image.tmdb.org/t/p/w300/nPoVS7bic7MvWNTjBktml6B307S.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0106856"
        },
        {
            title: "O Mundo de Andy",
            year: 1999,
            genre: "Comédia/Drama",
            img: "https://image.tmdb.org/t/p/w300/qwabM2f4OHtm2c6PT2yd9qBw0TZ.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0125664"
        },
        {
            title: "Bom Dia, Vietnã",
            year: 1987,
            genre: "Comédia",
            img: "https://image.tmdb.org/t/p/w300/nCGK7GwtjCu2gvdfyvxLX3JkxE9.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0093105"
        },
        {
            title: "Einstein e a Bomba",
            year: 2024,
            genre: "Drama/História",
            img: "https://image.tmdb.org/t/p/w300/pGEB1qR73d8XNhnHCXqnkuMokIk.jpg",
            src: "https://embedder.net/e/movie?imdb=tt28756876"
        },
        {
            title: "Magnólia",
            year: 1999,
            genre: "Drama",
            img: "https://image.tmdb.org/t/p/w300/uq2u8HgtLFJkjNq2kHb2jvipIPT.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0175880"
        },
        {
            title: "A Bruxa de Blair",
            year: 1999,
            genre: "Terror",
            img: "https://image.tmdb.org/t/p/w300/jAKX4midH0vSm2XT54g5TWluQqw.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0185937"
        },
        {
            title: "O Patriota",
            year: 2000,
            genre: "Ação/Drama",
            img: "https://image.tmdb.org/t/p/w300/oe26GVJTIEFLW8WjGMj1K0MbWUJ.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0187393"
        },
        {
            title: "O Profissional",
            year: 1994,
            genre: "Crime/Drama",
            img: "https://image.tmdb.org/t/p/w300/eThcNkIpmPYUVYZ5PMs7o5Fts1D.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0110413"
        },
        {
            title: "Elvis é Assim",
            year: 1970,
            genre: "Documentário",
            img: "https://image.tmdb.org/t/p/w300/8qwwp5fOPNXDfaqta5x34nDXEDI.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0065687"
        },
        {
            title: "Che: O Argentino",
            year: 2006,
            genre: "Drama/História",
            img: "https://image.tmdb.org/t/p/w300/ekUpkM5tStkZuzpIzg77PbkG6SM.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0892255"
        },
        {
            title: "Elvis",
            year: 2022,
            genre: "Drama/História",
            img: "https://image.tmdb.org/t/p/w300/4CYhJ9WNHIc1WRrQ5kYwBtmMvNB.jpg",
            src: "https://embedder.net/e/movie?imdb=tt3704428"
        },
        {
            title: "O Show de Truman",
            year: 1998,
            genre: "Comédia/Drama",
            img: "https://image.tmdb.org/t/p/w300/rbPTCnxQgEsWdetEcPiaKstX7mp.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0120382"
        },
        {
            title: "AK-47",
            year: 2020,
            genre: "Drama/História",
            img: "https://image.tmdb.org/t/p/w300/4djODIhP8TZtjkG6w2xZjOuLk6.jpg",
            src: "https://embedder.net/e/movie?imdb=tt11547520"
        },
        {
            title: "À Espera de um Milagre",
            year: 1997,
            genre: "Crime/Drama",
            img: "https://image.tmdb.org/t/p/w300/14hEqW67IiHlKpzKMLUXyktzZIV.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0118799"
        },
        {
            title: "Uma Mente Brilhante",
            year: 2001,
            genre: "Drama/Romance",
            img: "https://image.tmdb.org/t/p/w300/8K5W9QnNT7r1V9GuJ5z5KlrROkd.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0268978"
        },
        {
            title: "A Lista de Schindler",
            year: 1993,
            genre: "Drama/História",
            img: "https://image.tmdb.org/t/p/w300/bGhhNzJYDsuLruNN5bJ2PvLcMiq.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0108052"
        },
        {
            title: "Diários de Motocicleta",
            year: 2004,
            genre: "Drama",
            img: "https://image.tmdb.org/t/p/w300/mylaAHi6yNibVqHoTj1SpCwY3zV.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0318462"
        },
        {
            title: "O Senhor dos Anéis",
            year: 1978,
            genre: "Fantasia",
            img: "https://image.tmdb.org/t/p/w300/3rSiabvjCGjkCTHSB3eYgDKKNv2.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0077869"
        },
        {
            title: "Carros",
            year: 2006,
            genre: "Comédia/Infantil",
            img: "https://image.tmdb.org/t/p/w300/2nM2NRV8wt3n3ffoHQ3KdMkY3vR.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0317219"
        },
        {
            title: "A Sniper Russa",
            year: 2015,
            genre: "Drama/História",
            img: "https://image.tmdb.org/t/p/w300/6Rj2CW7ZaNOcEhGKndXka2p86s4.jpg",
            src: "https://embedder.net/e/movie?imdb=tt4084744"
        },
        {
            title: "Loucademia de Polícia",
            year: 1984,
            genre: "Comédia",
            img: "https://image.tmdb.org/t/p/w300/9R7hTHaSeKU7Fk0Dr75Y6YhdYcu.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0087928"
        },
        {
            title: "O Estranho Mundo de Jack",
            year: 1993,
            genre: "Fantasia",
            img: "https://image.tmdb.org/t/p/w300/pyMGhuAWC7nYyolKJlFbT7pp02K.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0107688"
        },
        {
            title: "Deadpool & Wolverine",
            year: 2024,
            genre: "Comédia/Ação",
            img: "https://image.tmdb.org/t/p/w300/qkhZRqCWqJ376sBzD4MeAO2w4wv.jpg",
            src: "https://embedder.net/e/movie?imdb=tt6263850"
        },
        {
            title: "Advogado do Diabo",
            year: 1997,
            genre: "Drama/Suspense",
            img: "https://image.tmdb.org/t/p/w300/qL17FxDhLDeTdgZxOg2MQrY8PMv.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0118971"
        },
        {
            title: "Efeito Borboleta",
            year: 2004,
            genre: "Ficção",
            img: "https://image.tmdb.org/t/p/w300/ojyrQRIQ6f0hHFpJoXTAeUx0ynX.jpg",
            src: "https://embedder.net/e/movie?imdb=tt0289879"
        },
        
        
        
        
        


        // Mais filmes
    ];

    const moviesPerPage = 12;
    let currentPage = 1;
    let filteredMovies = movies.slice(); // Inicialmente, todos os filmes são mostrados

        // busca
    $('#searchInput').on('input', function () {
        const query = $(this).val().toLowerCase();
        filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query) || movie.genre.toLowerCase().includes(query));
        currentPage = 1; 
        renderMovies(currentPage, filteredMovies);
        renderPagination(filteredMovies);
    });

    function renderMovies(page, movieList) {
        $('#movie-cards').empty();
        const start = (page - 1) * moviesPerPage;
        const end = start + moviesPerPage;
        const paginatedMovies = movieList.slice(start, end);

        paginatedMovies.forEach(movie => {
            const movieCard = `
                <div class="col-md-3 mb-4">
                    <div class="card">
                        <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">${movie.year} - ${movie.genre}</p>
                            <div class="btn-container">
                                <button class="btn btn-primary" data-toggle="modal" data-target="#movieModal" data-title="${movie.title}" data-src="${movie.src}"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ff192d" class="bi bi-play-btn-fill" viewBox="0 0 16 18">
                                  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                                </svg></button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            $('#movie-cards').append(movieCard);
        });

        $('.btn-primary').on('click', function () {
            const movieTitle = $(this).data('title');
            const movieSrc = $(this).data('src');
            $('#movieModalLabel').text(movieTitle);
            $('#EmbedderContainer').attr('src', movieSrc);
        });

        $('#movieModal').on('hidden.bs.modal', function () {
            $('#EmbedderContainer').attr('src', '');
        });
    }

    function renderPagination(movieList) {
        $('#pagination').empty();
        const totalPages = Math.ceil(movieList.length / moviesPerPage);
        const maxButtonsToShow = 3;
        const startButton = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
        const endButton = Math.min(totalPages, startButton + maxButtonsToShow - 1);

        // botão "Primeira Página"
        const firstButton = $("<li>").addClass("page-item").append($("<a>").addClass("page-link pagination-btn").text("⇤"));
        if (currentPage === 1) firstButton.addClass('disabled');
        firstButton.click(function () {
            if (currentPage > 1) {
                currentPage = 1;
                renderMovies(currentPage, movieList);
                renderPagination(movieList);
                scrollToTop();
            }
        });
        $('#pagination').append(firstButton);

        // botões numéricos
        for (let i = startButton; i <= endButton; i++) {
            const pageItem = $("<li>").addClass("page-item").append($("<a>").addClass("page-link pagination-btn").text(i));
            if (i === currentPage) {
                pageItem.addClass("active");
            }
            pageItem.click(function () {
                currentPage = i;
                renderMovies(currentPage, movieList);
                renderPagination(movieList);
                scrollToTop();
            });
            $('#pagination').append(pageItem);
        }

        // botão "Última Página"
        const lastButton = $("<li>").addClass("page-item").append($("<a>").addClass("page-link pagination-btn").text("⇥"));
        if (currentPage === totalPages) lastButton.addClass('disabled');
        lastButton.click(function () {
            if (currentPage < totalPages) {
                currentPage = totalPages;
                renderMovies(currentPage, movieList);
                renderPagination(movieList);
                scrollToTop();
            }
        });
        $('#pagination').append(lastButton);
    }

    function scrollToTop() {
        const targetOffset = $('#buscar').offset().top;
        $("html, body").animate({ scrollTop: targetOffset }, "slow");
    }

    renderMovies(currentPage, filteredMovies);
    renderPagination(filteredMovies);
});