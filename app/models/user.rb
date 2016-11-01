class User < ApplicationRecord
  has_secure_token :session
end
