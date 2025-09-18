// Mock Data for Portfolio Website
const mockData = {
    // Personal Information
    personal: {
        name: "Xample",
        title: "Fullstack Developer & Business Architect",
        email: "xample@email.com",
        phone: "+62 812-3456-7890",
        location: "Jakarta, Indonesia",
        bio: "Fullstack Developer dengan 5+ tahun pengalaman membangun aplikasi web modern, mobile apps, dan sistem enterprise yang scalable.",
        profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
    },

    // Skills Data
    skills: [
        {
            name: "JavaScript",
            icon: "fab fa-js-square",
            level: "Expert",
            color: "#F7DF1E"
        },
        {
            name: "React",
            icon: "fab fa-react",
            level: "Beginner",
            color: "#61DAFB"
        },
        {
            name: "Laravel 12",
            icon: "fab fa-laravel",
            level: "Beginner",
            color: "#FF2D20"
        },
        {
            name: "Python",
            icon: "fab fa-python",
            level: "Expert",
            color: "#3776AB"
        },
        {
            name: "MySQL",
            icon: "fas fa-database",
            level: "Expert",
            color: "#00758F"
        },
        {
            name: "PHP",
            icon: "fab fa-php",
            level: "Expert",
            color: "#777BB4"
        },
        {
            name: "Figma",
            icon: "fab fa-figma",
            level: "Expert",
            color: "#F24E1E"
        },
        {
            name: "Git",
            icon: "fab fa-git-alt",
            level: "Expert",
            color: "#F05032"
        },
        {
            name: "Debian",
            icon: "fab fa-linux",
            level: "Beginner",
            color: "#ffffffff"
        }
    ],

    // Portfolio Projects
    portfolio: [
        {
            id: 1,
            title: "House RPL",
            description: "Software khusus anak RPL memudahkan navigasi tugas project realtime dan panduan guide dengan Laravel 12.",
            image: "https://smkn2kotajambi.sch.id/wp-content/uploads/2024/08/rekayasa_perangkat_lunak_0a9636db50-600x450.jpeg",
            category: "fullstack",
            tags: ["HTML", "JS", "Mysql", "Php", "Laravel 12"],
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            id: 2,
            title: "Fakhri Caffe",
            description: "Website Coffee Shop yang sederhana dan modern dengan Laravel12 dan Css Pro. Menyediakan fitur real-time chat antara customer dan barista.",
            image: "Fakhri_cafe.png",
            category: "web",
            tags: ["Laravel 12", "Figma", "Mysql", "Php", "Css Pro"],
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            id: 3,
            title: "Transaksi Sederhana",
            description: "Aplikasi mobile yang berfungsi menghitung metode pembayaran virtual menggunakan Python.",
            image: "Python.png",
            category: "mobile",
            tags: ["Python", ],
            liveUrl: "#",
            githubUrl: "https://github.com/nairhacan/Softwere_windows-python",
            featured: true
        },
        // {
        //     id: 4,
        //     title: "Restaurant API System",
        //     description: "RESTful API untuk sistem manajemen restoran dengan fitur ordering, inventory, staff management, dan reporting analytics.",
        //     image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
        //     category: "api",
        //     tags: ["Node.js", "Express", "MongoDB", "JWT"],
        //     liveUrl: "#",
        //     githubUrl: "#",
        //     featured: false
        // },
        // {
        //     id: 5,
        //     title: "Learning Management System",
        //     description: "Platform pembelajaran online dengan video streaming, quiz system, progress tracking, dan certificate generation.",
        //     image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
        //     category: "web",
        //     tags: ["Vue.js", "Laravel", "MySQL", "AWS"],
        //     liveUrl: "#",
        //     githubUrl: "#",
        //     featured: false
        // },
        // {
        //     id: 6,
        //     title: "IoT Dashboard",
        //     description: "Dashboard monitoring untuk IoT devices dengan real-time data visualization, alerts system, dan device control panel.",
        //     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        //     category: "fullstack",
        //     tags: ["Angular", "Python", "InfluxDB", "MQTT"],
        //     liveUrl: "#",
        //     githubUrl: "#",
        //     featured: false
        // }
    ],

    // Experience Timeline
    experience: [
        {
            id: 1,
            date: "2023 - Present",
            title: "Junior Developer",
            company: "SMK Assalaam Bandung",
            description: "Di tahun ini adalah awal saya mengenal beberapa bahasa pemrograman serta memahaminya."
        },
        {
            id: 2,
            date: "2024",
            title: "Berdirinya FTs Project",
            company: "NLFTs company",
            description: "Di tahun ini saya mendirikan sebuah tim developer untuk memudahkan saya dalam membuat project besar."
        },
        {
            id: 3,
            date: "2025",
            title: "Beginner Laravel 12",
            company: "Freelance Developer",
            description: "Di tahun ini saya mulai mengenali beberapa framework yang bisa membantu saya untuk membuat project."
        },
        {
            id: 4,
            date: "2025 - Est",
            title: "Indie Developer",
            company: "NLFTs company",
            description: "Di tahun ini saya belajar secara mandiri beberapa bahasa pemrograman bukan hanya dari sekolah saja."
        }
    ],

    // Testimonials
    testimonials: [
        {
            id: 1,
            name: "Aiham Maqdy",
            position: "Assosiation Sepuh",
            avatar: "aiham.jpeg",
            quote: "Memuaskan Bekerjasama Dengan Kina Menjadikan Project lebih cepat selesai dan tersetruktur Rapih tanpa Kendala"
        },
        {
            id: 2,
            name: "Rakha Az",
            position: "GM, Chess.com",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-PSsyWm0gWoz9gEe0eUxWoSO04S5QWvBbg&s",
            quote: "Working dengan Kina sangat menyenangkan. Dia tidak hanya strong secara teknis, tapi juga punya business sense yang baik. Hasil kerjanya selalu exceed expectations."
        },
        {
            id: 3,
            name: "Fakhri Ibnu",
            position: "Manager, project FTs  ",
            avatar: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcEEtavGmVhePIhA4fmJzOBvaLXirjnD11pX2MrTzTKZcuthWbM6Ra5jOP81VzoLy2Acv1CXqXoTnsZOVPwteFAYoeQx4p5AGX50IUXofACYKMSYxpAdesBXDgNaWMoVMiKQNHhY2QMSWlod9DyO7zeAYHi?key=MMJwGnynAL9tXTUm71mV8w",
            quote: "Kina memiliki kemampuan problem-solving yang luar biasa. Setiap technical challenge yang kompleks selalu bisa dia handle dengan elegant solution dan clean code."
        }
    ],

    // Blog Posts
    blog: [
        {
            id: 1,
            title: "Membangun Project Laravel 2025",
            excerpt: "Banyak dari kami percaya Laravel mampu menjadi andalan dalam membangun website sejak tahun 2011.",
            date: "15 June 2025",
            image: "https://laravel.com/images/home/video-preview-static.jpg",
            readTime: "8 min read",
            category: "Architecture",
            link: "https://laravel.com/docs/12.x/releases" 
        },
        {
            id: 2,
            title: "React 18 Features yang Wajib Developer Ketahui",
            excerpt: "Explore fitur-fitur terbaru React 18 termasuk Concurrent Features, Suspense, dan Automatic Batching yang akan improve performance aplikasi.",
            date: "8 Januari 2024",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop",
            readTime: "6 min read",
            category: "React",
            link: "https://www.codepolitan.com/blog/react-js-versi-terbaru-caritahu-yuk/"
        },
        {
            id: 3,
            title: "Vite Generasi Frontend yang Cepat dan Mudah",
            excerpt: "Alat pengembangan frontend modern yang bertujuan untuk memberikan pengalaman pengembangan yang cepat dan efisien untuk proyek web modern.",
            date: "2 Januari 2024",
            image: "https://miro.medium.com/v2/resize:fit:1200/1*vpnZjSyJZjm_-Yj2idrmzg.png",
            readTime: "10 min read",
            category: "Database",
            link: "https://v2.vite.dev/guide/",
        }
    ],

    // Typed Text Animation
    typedTexts: [
        "Frontend Developer",
        "UI/UX Designer", 
        "Backend Developer",
        "Stuck Manager"
    ],

    // Social Links
    social: {
        github: "https://github.com/xample",
        linkedin: "https://linkedin.com/in/xample",
        twitter: "https://twitter.com/xample",
        instagram: "https://instagram.com/xample"
    },

    // Contact Form Success Messages
    messages: {
        success: "Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda kembali.",
        error: "Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi langsung melalui email."
    }
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mockData;
} else {
    window.mockData = mockData;
}