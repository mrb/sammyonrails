# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key    => '_sammyonrails_session',
  :secret => 'f8af6464030e159e2f56937c9d6c9ff93e91493e2c57943a6e76c23180d51fb275daa9de1a1f3a89088b2103397480c24fff67ddf8b235fcc05e52d6ef575508'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
