SELECT menu.id,
  menu.name,
  menu.price,
  menu.is_sold_out,
  menu.image_urls,
  user_x_liked_menu.user_id AS is_liked,
  array_agg(hashtag.name) AS hashtags
FROM menu
  LEFT JOIN menu_x_hashtag ON menu_x_hashtag.menu_id = menu.id
  JOIN hashtag ON hashtag.id = menu_x_hashtag.hashtag_id
  LEFT JOIN user_x_liked_menu ON user_x_liked_menu.menu_id = menu.id
  AND user_x_liked_menu.user_id = $1
WHERE menu.store_id = $2
  AND menu.name = $3