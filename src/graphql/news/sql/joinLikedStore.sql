JOIN user_x_liked_store ON news.store_id = user_x_liked_store.store_id
AND user_x_liked_store.user_id = $1