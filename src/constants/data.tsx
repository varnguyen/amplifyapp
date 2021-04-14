const mockCategoryList = [
    { key: 'dresses', title: 'Dresses', total: 3, status: 0 },
    { key: 'jackets', title: 'Jackets', total: 2, status: 1 },
    { key: 'tshirts', title: 'T-shirts', total: 0, status: 0 },
    { key: 'jeans', title: 'Jeans', total: 1, status: 0 },
    { key: 'bags', title: 'Bags', total: 4, status: 0 },
    { key: 'sportwear', title: 'Sportwear', total: 0, status: 2 },
    { key: 'jumpers', title: 'Jumpers', total: 1, status: 0 },
    { key: 'shoes', title: 'Shoes', total: 2, status: 0 }
]

const mockProductList = [
    {
        name: 'Beige knitted elastic runner shoes',
        quantity: 1,
        gia_tien: 84,
        img: 'assets/images/products/cart/product-1.jpg',
        alt: ''
    },
    {
        name: 'Blue utility pinafore denim dress',
        quantity: 1,
        gia_tien: 76,
        img: 'assets/images/products/cart/product-2.jpg',
        alt: ''
    }
]

const mockBlogLists = [
    {
        img: 'assets/images/blog/listing/post-1.jpg',
        author: 'John Doe',
        created_at: 'Nov 22, 2018',
        total_comment: 2,
        title: 'Cras ornare tristique elit.',
        tag: ['Lifestyle', 'Shopping'],
        description:
            'Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas ...'
    },
    {
        img: 'assets/images/blog/listing/post-2.jpg',
        author: 'John Doe',
        created_at: 'Nov 22, 2018',
        total_comment: 3,
        title: 'Facilisis aliquam porttitor mauris sit amet orci.',
        tag: ['Lifestyle'],
        description:
            'Morbi purus libero, faucibus commodo quis, gravida id, est. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui ...'
    },
    {
        img: 'assets/images/blog/listing/post-3.jpg',
        author: 'John Doe',
        created_at: 'Nov 22, 2018',
        total_comment: 2,
        title: 'Utaliquam sollicitudin leo.',
        tag: ['Lifestyle', 'Shopping'],
        description:
            'Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas ...'
    },
    {
        img: 'assets/images/blog/listing/post-4.jpg',
        author: 'John Doe',
        created_at: 'Nov 22, 2018',
        total_comment: 2,
        title: 'Fusce pellentesque suscipit.',
        tag: ['Lifestyle', 'Shopping'],
        description:
            'Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, euvulputate magna eros eu erat. Aliquam erat volutpat eget felis ...'
    },
    {
        img: 'assets/images/blog/listing/post-5.jpg',
        author: 'John Doe',
        created_at: 'Nov 22, 2018',
        total_comment: 2,
        title: 'Donec nec justo eget felis facilisis fermentum.',
        tag: ['Hobbies', 'Shopping'],
        description:
            'Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque lectus. Donec consectetuer ligula vulputate sem ...'
    },
    {
        img: 'assets/images/blog/listing/post-1.jpg',
        author: 'John Doe',
        created_at: 'Nov 22, 2018',
        total_comment: 2,
        title: 'Quisque volutpat mattiseros.',
        tag: ['Travel', 'Hobbies'],
        description:
            'Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque lectus. Donec consectetuer ...'
    }
]

const mockPopularPosts = [
    {
        img: 'assets/images/blog/sidebar/post-1.jpg',
        created_at: 'Nov 22, 2018',
        title: 'Aliquam tincidunt mauris eurisus.'
    },
    {
        img: 'assets/images/blog/sidebar/post-2.jpg',
        created_at: 'Nov 22, 2018',
        title: 'Cras ornare tristique elit.'
    },
    {
        img: 'assets/images/blog/sidebar/post-3.jpg',
        created_at: 'Nov 12, 2018',
        title: 'Vivamus vestibulum ntulla nec ante.'
    },
    {
        img: 'assets/images/blog/sidebar/post-4.jpg',
        created_at: 'Nov 25, 2018',
        title: 'Donec quis dui at dolor tempor interdum.'
    }
]

const mockPBrowseTags = ['fashion', 'style', 'women', 'photography', 'travel', 'shopping', 'hobbies']

const mockCategories = [
    { name: 'Lifestyle', total: 3 },
    { name: 'Shopping', total: 4 },
    { name: 'Fashion', total: 1 },
    { name: 'Travel', total: 5 },
    { name: 'Hobbies', total: 2 }
]

const mockCommentLists = [
    {
        ava: 'assets/images/blog/comments/1.jpg',
        user_name: 'Jimmy Pearson',
        created_at: 'November 9, 2018 at 2:19 pm',
        comment:
            'Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.',
        comments: [
            {
                ava: 'assets/images/blog/comments/2.jpg',
                user_name: 'Lena Knight',
                created_at: 'November 9, 2018 at 2:19 pm',
                comment: 'Morbi interdum mollis sapien. Sed ac risus.'
            },
            {
                ava: 'assets/images/blog/comments/1.jpg',
                user_name: 'Minh John',
                created_at: 'November 9, 2018 at 2:19 pm',
                comment: 'Still Working ...'
            }
        ]
    },
    {
        ava: 'assets/images/blog/comments/3.jpg',
        user_name: 'Johnathan Castillo',
        created_at: 'November 9, 2018 at 2:19 pm',
        comment:
            'Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.',
        comments: []
    }
]

const mockNewLink = [
    {
        status: 'new',
        img1: 'assets/images/demos/demo-17/products/product-1.jpg',
        img2: 'assets/images/demos/demo-17/products/product-1-2.jpg',
        category: 'Clothing',
        title: 'Linen-blend dress',
        price: '$60.00',
        colors: [
            { background: '#e5dcb1', name: 'Color name' },
            { background: '#bacbd8', name: 'Color name' }
        ]
    },
    {
        status: 'sale',
        img1: 'assets/images/demos/demo-17/products/product-2.jpg',
        img2: 'assets/images/demos/demo-17/products/product-2-2.jpg',
        category: 'Shoes',
        title: 'Sandals with lacing',
        new_price: 'Now $70.00',
        old_price: 'Was $84.00'
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-3.jpg',
        img2: 'assets/images/demos/demo-17/products/product-3-2.jpg',
        category: 'Clothing',
        title: 'Paper bag trousers',
        price: '$60.00',
        colors: [
            { background: '#9fac76', name: 'Color name' },
            { background: '#333333', name: 'Color name' }
        ]
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-7.jpg',
        img2: 'assets/images/demos/demo-17/products/product-7-2.jpg',
        category: 'Handbags',
        title: 'Paper straw shopper',
        price: '$398.00'
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-4.jpg',
        img2: 'assets/images/demos/demo-17/products/product-4-2.jpg',
        category: 'Handbags',
        title: 'Bucket bag',
        price: '$350.00',
        colors: [
            { background: '#e3a84d', name: 'Color name' },
            { background: '#f48a5b', name: 'Color name' },
            { background: '#333333', name: 'Color name' }
        ]
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-5.jpg',
        img2: 'assets/images/demos/demo-17/products/product-5-2.jpg',
        category: 'Clothing',
        title: 'Silk-blend kaftan',
        price: '$370.00'
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-6.jpg',
        img2: 'assets/images/demos/demo-17/products/product-6-2.jpg',
        category: 'Clothing',
        title: 'Linen-blend jumpsuit',
        price: '$595.00'
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-8.jpg',
        img2: 'assets/images/demos/demo-17/products/product-8-2.jpg',
        category: 'Shoes',
        title: 'Sandals',
        new_price: 'Now $120.00',
        old_price: 'Was $140.00'
    }
]

const mockFeaturedLink = [
    {
        status: 'new',
        img1: 'assets/images/demos/demo-17/products/product-1.jpg',
        img2: 'assets/images/demos/demo-17/products/product-1-2.jpg',
        category: 'Clothing',
        title: 'Linen-blend dress',
        price: '$60.00',
        colors: [
            { background: '#e5dcb1', name: 'Color name' },
            { background: '#bacbd8', name: 'Color name' }
        ]
    },
    {
        status: 'sale',
        img1: 'assets/images/demos/demo-17/products/product-2.jpg',
        img2: 'assets/images/demos/demo-17/products/product-2-2.jpg',
        category: 'Shoes',
        title: 'Sandals with lacing',
        new_price: 'Now $70.00',
        old_price: 'Was $84.00'
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-3.jpg',
        img2: 'assets/images/demos/demo-17/products/product-3-2.jpg',
        category: 'Clothing',
        title: 'Paper bag trousers',
        price: '$60.00',
        colors: [
            { background: '#9fac76', name: 'Color name' },
            { background: '#333333', name: 'Color name' }
        ]
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-7.jpg',
        img2: 'assets/images/demos/demo-17/products/product-7-2.jpg',
        category: 'Handbags',
        title: 'Paper straw shopper',
        price: '$398.00'
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-4.jpg',
        img2: 'assets/images/demos/demo-17/products/product-4-2.jpg',
        category: 'Handbags',
        title: 'Bucket bag',
        price: '$350.00',
        colors: [
            { background: '#e3a84d', name: 'Color name' },
            { background: '#f48a5b', name: 'Color name' },
            { background: '#333333', name: 'Color name' }
        ]
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-5.jpg',
        img2: 'assets/images/demos/demo-17/products/product-5-2.jpg',
        category: 'Clothing',
        title: 'Silk-blend kaftan',
        price: '$370.00'
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-6.jpg',
        img2: 'assets/images/demos/demo-17/products/product-6-2.jpg',
        category: 'Clothing',
        title: 'Linen-blend jumpsuit',
        price: '$595.00'
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-8.jpg',
        img2: 'assets/images/demos/demo-17/products/product-8-2.jpg',
        category: 'Shoes',
        title: 'Sandals',
        new_price: 'Now $120.00',
        old_price: 'Was $140.00'
    }
]

const mockBestLink = [
    {
        status: 'new',
        img1: 'assets/images/demos/demo-17/products/product-1.jpg',
        img2: 'assets/images/demos/demo-17/products/product-1-2.jpg',
        category: 'Clothing',
        title: 'Linen-blend dress',
        price: '$60.00',
        colors: [
            { background: '#e5dcb1', name: 'Color name' },
            { background: '#bacbd8', name: 'Color name' }
        ]
    },
    {
        status: 'sale',
        img1: 'assets/images/demos/demo-17/products/product-2.jpg',
        img2: 'assets/images/demos/demo-17/products/product-2-2.jpg',
        category: 'Shoes',
        title: 'Sandals with lacing',
        new_price: 'Now $70.00',
        old_price: 'Was $84.00'
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-3.jpg',
        img2: 'assets/images/demos/demo-17/products/product-3-2.jpg',
        category: 'Clothing',
        title: 'Paper bag trousers',
        price: '$60.00',
        colors: [
            { background: '#9fac76', name: 'Color name' },
            { background: '#333333', name: 'Color name' }
        ]
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-7.jpg',
        img2: 'assets/images/demos/demo-17/products/product-7-2.jpg',
        category: 'Handbags',
        title: 'Paper straw shopper',
        price: '$398.00'
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-4.jpg',
        img2: 'assets/images/demos/demo-17/products/product-4-2.jpg',
        category: 'Handbags',
        title: 'Bucket bag',
        price: '$350.00',
        colors: [
            { background: '#e3a84d', name: 'Color name' },
            { background: '#f48a5b', name: 'Color name' },
            { background: '#333333', name: 'Color name' }
        ]
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-5.jpg',
        img2: 'assets/images/demos/demo-17/products/product-5-2.jpg',
        category: 'Clothing',
        title: 'Silk-blend kaftan',
        price: '$370.00'
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-6.jpg',
        img2: 'assets/images/demos/demo-17/products/product-6-2.jpg',
        category: 'Clothing',
        title: 'Linen-blend jumpsuit',
        price: '$595.00'
    },
    {
        img1: 'assets/images/demos/demo-17/products/product-8.jpg',
        img2: 'assets/images/demos/demo-17/products/product-8-2.jpg',
        category: 'Shoes',
        title: 'Sandals',
        new_price: 'Now $120.00',
        old_price: 'Was $140.00'
    }
]

export {
    mockCategoryList,
    mockProductList,
    mockBlogLists,
    mockPopularPosts,
    mockPBrowseTags,
    mockCategories,
    mockCommentLists,
    mockNewLink,
    mockFeaturedLink,
    mockBestLink
}
