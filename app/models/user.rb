class User < ActiveRecord::Base
  validates_presence_of :session_token, :password_digest
  validates :username, :email, presence: true, uniqueness: true
  validates :password,
    presence: true, length: {minimum: 6, allow_nil:true}

  after_initialize :ensure_session_token

  attr_reader :password

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return user if user && user.is_password?(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
