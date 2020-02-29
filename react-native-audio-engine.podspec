require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-audio-engine"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  react-native-audio-engine
                   DESC
  s.homepage     = "https://github.com/ioveracker/react-native-audio-engine"
  s.license      = "MIT"
  # s.license    = { :type => "MIT", :file => "FILE_LICENSE" }
  s.authors      = { "Isaac Overacker" => "isaac@overacker.me" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/ioveracker/react-native-audio-engine.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,swift}"
  s.requires_arc = true

  s.dependency "React"
  # ...
  # s.dependency "..."
end

