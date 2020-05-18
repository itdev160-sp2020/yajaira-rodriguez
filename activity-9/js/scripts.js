$(function () {

    var data = [

        {
            id: 1,
            title: 'Love',
            body: 'Love For All, Hatred For None.',
            author: 'Khalifatul Masih III'
        },
        {
            id: 2,
            title: 'You',
            body: 'Change the world by being yourself.',
            author: 'Amy Poehler'
        },
        {
            id: 3,
            title: 'Beginning',
            body: 'Every moment is a fresh beginning.',
            author: 'T.S Eliot'
        },
        {
            id: 4,
            title: 'Regret',
            body: 'Never regret anything that made you smile.',
            author: 'Mark Twain'
        },
        {
            id: 5,
            title: 'Imagine',
            body: 'Everything you can imagine is real.',
            author: 'Pablo Picasso'
        }
    ];



    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#post-container');

    function initPosts() {
        for (let i = 0; i < data.length; i++) {
            var postId = 'post-' + data[i].id,
                $post = $('<section class="post"></section>'),
                $title = $('<h2 class="title"></h2>'),
                $body = $('<blockquote></blockquote>'),
                $author = $('<span class="author"></span>'),
                $navItem = $('<li></li>');

            $title.text(data[i].title);
            $body.text(data[i].body);
            $author.text(data[i].author);

            $navItem.attr('id', data[i].id);
            $navItem.text(data[i].title);

            $post.attr('id', postId);
            $post.append($title);
            $post.append($body);
            $post.append($author);

            $posts.append($post);
            $nav.append($navItem);

            $navItem.on('click', function () {
                var id = $(this).attr('id');
                $posts.children().hide();
                $posts.find('#post-' + id).fadeIn();
            });

            $posts.children('.post').hide();
            $intro.fadeIn(1000);
        }
    }

    initPosts();
});