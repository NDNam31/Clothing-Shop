users (
  id UUID PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150) UNIQUE,
  password_hash TEXT,
  phone VARCHAR(20),
  role ENUM('USER', 'ADMIN'),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)

user_profiles (
  user_id UUID PRIMARY KEY,
  gender ENUM('male', 'female', 'other'),
  height INT,        -- cm
  weight INT,        -- kg
  body_type ENUM('slim', 'normal', 'chubby', 'muscular'),
  skin_tone ENUM('light', 'medium', 'dark'),
  style_preference TEXT,  -- ví dụ: "Hàn Quốc, basic, streetwear"
  created_at TIMESTAMP
)

categories (
  id UUID PRIMARY KEY,
  name VARCHAR(100),
  slug VARCHAR(100),
  parent_id UUID NULL
)

products (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  price DECIMAL(10,2),
  category_id UUID,
  gender ENUM('male', 'female', 'unisex'),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)

product_variants (
  id UUID PRIMARY KEY,
  product_id UUID,
  size ENUM('XS','S','M','L','XL','XXL'),
  color VARCHAR(50),
  stock INT
)

product_images (
  id UUID PRIMARY KEY,
  product_id UUID,
  image_url TEXT,
  is_main BOOLEAN
)

orders (
  id UUID PRIMARY KEY,
  user_id UUID,
  total_price DECIMAL(10,2),
  status ENUM('pending','paid','shipped','completed','cancelled'),
  created_at TIMESTAMP
)

order_items (
  id UUID PRIMARY KEY,
  order_id UUID,
  product_variant_id UUID,
  quantity INT,
  price DECIMAL(10,2)
)

product_ai_attributes (
  product_id UUID PRIMARY KEY,
  style_tags TEXT,     -- "basic, hàn quốc, streetwear"
  suitable_body_type TEXT, -- "slim, normal"
  suitable_height_min INT,
  suitable_height_max INT,
  suitable_weight_min INT,
  suitable_weight_max INT,
  occasion TEXT,       -- "đi chơi, đi làm, đi tiệc"
  season ENUM('summer','winter','all')
)

user_behaviors (
  id UUID PRIMARY KEY,
  user_id UUID,
  product_id UUID,
  action ENUM('view','add_to_cart','purchase','like'),
  created_at TIMESTAMP
)

chat_histories (
  id UUID PRIMARY KEY,
  user_id UUID,
  message TEXT,
  sender ENUM('user','ai'),
  created_at TIMESTAMP
)
