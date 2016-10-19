class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # TODO: Look into using lockable for extra security
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
