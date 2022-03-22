class Post {
  constructor(id, username, image, likes, description, isLiked, isBookmarked) {
    this.id = id;
    this.username = username;
    this.image = image;
    this.likes = likes;
    this.description = description;
    this.isLiked = isLiked;
    this.isBookmarked = isBookmarked;
  }
}

export default Post;
