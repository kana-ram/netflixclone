
        // Sample video data with real Google hosted videos
        const videosData = {
            trending: [
                {
                    title: "Big Buck Bunny",
                    genre: "Animation",
                    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
                    description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore!"
                },
                {
                    title: "Elephant's Dream",
                    genre: "Animation",
                    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
                    description: "The first Blender Open Movie from 2006. This short movie tells the story of a young boy who discovers a world of creativity through his imagination."
                },
                {
                    title: "For Bigger Blazes",
                    genre: "Documentary",
                    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
                    description: "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes."
                },
                {
                    title: "For Bigger Escape",
                    genre: "Adventure",
                    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
                    description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough."
                },
                {
                    title: "For Bigger Fun",
                    genre: "Comedy",
                    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
                    description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35. Find out more at google.com/chromecast."
                },
                {
                    title: "For Bigger Joyrides",
                    genre: "Action",
                    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
                    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
                    description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides."
                }
            ],
            popular: [
                {
                    title: "Sintel",
                    genre: "Fantasy",
                    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
                    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
                    description: "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender."
                },
                {
                    title: "Subaru Outback",
                    genre: "Commercial",
                    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
                    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
                    description: "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation dealer event."
                },
                {
                    title: "Tears of Steel",
                    genre: "Sci-Fi",
                    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
                    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
                    description: "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film."
                },
                {
                    title: "Volkswagen GTI",
                    genre: "Commercial",
                    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
                    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg",
                    description: "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI."
                },
                {
                    title: "We Are Going On Bullrun",
                    genre: "Documentary",
                    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
                    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg",
                    description: "The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing."
                },
                {
                    title: "What Car Can You Get",
                    genre: "Review",
                    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
                    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg",
                    description: "The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car."
                }
            ],
            action: [
                {
                    title: "For Bigger Meltdowns",
                    genre: "Action",
                    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
                    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
                    description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger."
                },
                {
                    title: "Big Buck Bunny",
                    genre: "Animation",
                    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
                    description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself."
                },
                {
                    title: "Tears of Steel",
                    genre: "Sci-Fi Action",
                    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
                    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
                    description: "A futuristic short film with amazing visual effects created using Blender."
                }
            ]
        };

        // All videos combined for search and category pages
        const allVideos = [
            ...videosData.trending,
            ...videosData.popular,
            ...videosData.action
        ];

        // My List storage
        let myList = JSON.parse(localStorage.getItem('myList') || '[]');

        // Current video being played
        let currentVideo = null;

        // DOM Elements
        const header = document.getElementById('header');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');
        const videoModal = document.getElementById('videoModal');
        const videoPlayer = document.getElementById('videoPlayer');
        const videoSource = document.getElementById('videoSource');
        const videoTitle = document.getElementById('videoTitle');
        const videoDescription = document.getElementById('videoDescription');
        const closeVideo = document.querySelector('.close-video');
        const searchInput = document.getElementById('searchInput');

        // Initialize the application
        function init() {
            createMovieRows();
            setupEventListeners();
            populateCategoryPages();
            setupSearch();
            updateMyListDisplay();
        }

        // Create movie rows for home page
        function createMovieRows() {
            const rows = {
                'trending-row': videosData.trending,
                'popular-row': videosData.popular,
                'action-row': videosData.action
            };

            Object.entries(rows).forEach(([rowId, videos]) => {
                const row = document.getElementById(rowId);
                if (row) {
                    row.innerHTML = '';
                    videos.forEach(video => {
                        const movieCard = createMovieCard(video);
                        row.appendChild(movieCard);
                    });
                }
            });
        }

        // Create individual movie card
        function createMovieCard(video) {
            const card = document.createElement('div');
            card.className = 'movie-card';
            
            card.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}" class="movie-thumbnail" onerror="this.src='https://via.placeholder.com/300x169/333/fff?text=${encodeURIComponent(video.title)}'">
                <div class="movie-overlay"></div>
                <div class="movie-info">
                    <div class="movie-title">${video.title}</div>
                    <div class="movie-genre">${video.genre}</div>
                    <div class="movie-actions">
                        <div class="action-btn" title="Play" onclick="playVideo('${video.videoUrl}', '${video.title}', '${video.description}')">▶</div>
                        <div class="action-btn" title="Add to List" onclick="addToMyList('${video.title}', '${video.videoUrl}', '${video.thumbnail}', '${video.genre}', '${video.description}')">+</div>
                        <div class="action-btn" title="Like">👍</div>
                        <div class="action-btn" title="More Info" onclick="showVideoInfo('${video.title}', '${video.description}')">ℹ</div>
                    </div>
                </div>
            `;

            return card;
        }

        // Setup event listeners
        function setupEventListeners() {
            // Header scroll effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Mobile menu toggle
            mobileMenuBtn.addEventListener('click', () => {
                mobileNav.classList.toggle('active');
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
                    mobileNav.classList.remove('active');
                }
            });

            // Video modal close events
            closeVideo.addEventListener('click', closeVideoModal);
            
            window.addEventListener('click', (e) => {
                if (e.target === videoModal) {
                    closeVideoModal();
                }
            });

            // Escape key to close modal
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && videoModal.style.display === 'block') {
                    closeVideoModal();
                }
            });
        }

        // Show specific section
        function showSection(sectionName) {
            // Hide all sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionName).classList.add('active');
            
            // Update navigation active state
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Find and activate the corresponding navigation link
            const activeLink = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
            if (activeLink && activeLink.classList.contains('nav-link')) {
                activeLink.classList.add('active');
            }
            
            // Close mobile menu
            mobileNav.classList.remove('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Play video function
        function playVideo(videoUrl, title, description) {
            currentVideo = { videoUrl, title, description };
            videoSource.src = videoUrl;
            videoTitle.textContent = title;
            videoDescription.textContent = description;
            videoPlayer.load();
            videoModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Auto play the video
            videoPlayer.play().catch(e => {
                console.log('Auto-play prevented:', e);
            });
        }

        // Close video modal
        function closeVideoModal() {
            videoModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            videoPlayer.pause();
            videoSource.src = '';
        }

        // Add to My List function
        function addToMyList(title, videoUrl, thumbnail, genre, description) {
            const video = { title, videoUrl, thumbnail, genre, description };
            
            // Check if already in list
            const existingIndex = myList.findIndex(item => item.title === title);
            if (existingIndex === -1) {
                myList.push(video);
                localStorage.setItem('myList', JSON.stringify(myList));
                updateMyListDisplay();
                showNotification(`${title} added to My List!`);
            } else {
                showNotification(`${title} is already in your list!`);
            }
        }

        // Remove from My List
        function removeFromMyList(title) {
            myList = myList.filter(item => item.title !== title);
            localStorage.setItem('myList', JSON.stringify(myList));
            updateMyListDisplay();
            showNotification(`${title} removed from My List!`);
        }

        // Update My List display
        function updateMyListDisplay() {
            const myListGrid = document.getElementById('my-list-grid');
            if (myListGrid) {
                if (myList.length === 0) {
                    myListGrid.innerHTML = `
                        <div style="text-align: center; grid-column: 1/-1; padding: 4rem;">
                            <h2>Your list is empty</h2>
                            <p style="color: #b3b3b3; margin-top: 1rem;">Start adding movies and TV shows to create your personal watchlist!</p>
                        </div>
                    `;
                } else {
                    myListGrid.innerHTML = '';
                    myList.forEach(video => {
                        const categoryCard = createCategoryCard(video, true);
                        myListGrid.appendChild(categoryCard);
                    });
                }
            }
        }

        // Populate category pages
        function populateCategoryPages() {
            // TV Shows (using some videos as TV shows)
            const tvShows = allVideos.filter(video => 
                video.genre.includes('Documentary') || 
                video.genre.includes('Animation') || 
                video.title.includes('Elephant') || 
                video.title.includes('Sintel')
            );
            populateGrid('tv-shows-grid', tvShows);

            // Movies (remaining videos)
            const movies = allVideos.filter(video => 
                !tvShows.includes(video)
            );
            populateGrid('movies-grid', movies);

            // New & Popular (latest 6 videos)
            const newPopular = allVideos.slice(0, 6);
            populateGrid('new-popular-grid', newPopular);
        }

        // Populate grid with videos
        function populateGrid(gridId, videos) {
            const grid = document.getElementById(gridId);
            if (grid && videos.length > 0) {
                grid.innerHTML = '';
                videos.forEach(video => {
                    const categoryCard = createCategoryCard(video);
                    grid.appendChild(categoryCard);
                });
            }
        }

        // Create category card
        function createCategoryCard(video, showRemoveButton = false) {
            const card = document.createElement('div');
            card.className = 'category-card';
            
            card.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='https://via.placeholder.com/250x150/333/fff?text=${encodeURIComponent(video.title)}'">
                <div class="category-card-info">
                    <div class="category-card-title">${video.title}</div>
                    <div class="category-card-genre">${video.genre}</div>
                    ${showRemoveButton ? 
                        `<button onclick="removeFromMyList('${video.title}')" style="background: #e50914; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; margin-top: 0.5rem; cursor: pointer;">Remove</button>` 
                        : ''
                    }
                </div>
            `;
            
            card.addEventListener('click', (e) => {
                if (!e.target.closest('button')) {
                    playVideo(video.videoUrl, video.title, video.description);
                }
            });
            
            return card;
        }

        // Setup search functionality
        function setupSearch() {
            let searchTimeout;
            
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    performSearch(e.target.value);
                }, 300);
            });
        }

        // Perform search
        function performSearch(query) {
            const searchResults = document.getElementById('searchResults');
            
            if (!query.trim()) {
                searchResults.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 4rem;">
                        <h2>Start typing to search</h2>
                        <p style="color: #b3b3b3; margin-top: 1rem;">Find your favorite movies and TV shows</p>
                    </div>
                `;
                return;
            }
            
            const filteredVideos = allVideos.filter(video =>
                video.title.toLowerCase().includes(query.toLowerCase()) ||
                video.genre.toLowerCase().includes(query.toLowerCase()) ||
                video.description.toLowerCase().includes(query.toLowerCase())
            );
            
            if (filteredVideos.length === 0) {
                searchResults.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 4rem;">
                        <h2>No results found</h2>
                        <p style="color: #b3b3b3; margin-top: 1rem;">Try searching with different keywords</p>
                    </div>
                `;
                return;
            }
            
            searchResults.innerHTML = '';
            filteredVideos.forEach(video => {
                const categoryCard = createCategoryCard(video);
                searchResults.appendChild(categoryCard);
            });
        }

        // Show video info (alternative to playing)
        function showVideoInfo(title, description) {
            alert(`${title}\n\n${description}`);
        }

        // Show notification
        function showNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #e50914;
                color: white;
                padding: 1rem 2rem;
                border-radius: 4px;
                z-index: 3000;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            // Fade in
            setTimeout(() => {
                notification.style.opacity = '1';
            }, 100);
            
            // Remove after 3 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }, 3000);
        }

        // Add smooth scrolling for movie rows
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.row').forEach(row => {
                let isDown = false;
                let startX;
                let scrollLeft;

                row.addEventListener('mousedown', (e) => {
                    isDown = true;
                    startX = e.pageX - row.offsetLeft;
                    scrollLeft = row.scrollLeft;
                    row.style.cursor = 'grabbing';
                });

                row.addEventListener('mouseleave', () => {
                    isDown = false;
                    row.style.cursor = 'grab';
                });

                row.addEventListener('mouseup', () => {
                    isDown = false;
                    row.style.cursor = 'grab';
                });

                row.addEventListener('mousemove', (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - row.offsetLeft;
                    const walk = (x - startX) * 2;
                    row.scrollLeft = scrollLeft - walk;
                });

                // Touch support
                let startTouch = 0;
                
                row.addEventListener('touchstart', (e) => {
                    startTouch = e.touches[0].pageX - row.offsetLeft;
                    scrollLeft = row.scrollLeft;
                });

                row.addEventListener('touchmove', (e) => {
                    if (!startTouch) return;
                    const x = e.touches[0].pageX - row.offsetLeft;
                    const walk = (x - startTouch) * 2;
                    row.scrollLeft = scrollLeft - walk;
                });
            });
        });

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);

        // Handle video errors
        document.addEventListener('DOMContentLoaded', () => {
            const heroVideo = document.querySelector('.hero-video');
            if (heroVideo) {
                heroVideo.addEventListener('error', () => {
                    console.log('Hero video failed to load, hiding video element');
                    heroVideo.style.display = 'none';
                });
            }
        });

        // Make sure localStorage works (fallback for environments that don't support it)
        function safeSaveToStorage(key, data) {
            try {
                localStorage.setItem(key, JSON.stringify(data));
            } catch (e) {
                console.log('localStorage not available, using memory storage');
                // Could implement memory-based storage here as fallback
            }
        }

        function safeLoadFromStorage(key, defaultValue = []) {
            try {
                return JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));
            } catch (e) {
                console.log('localStorage not available, using default value');
                return defaultValue;
            }
        }
