# -*- encoding: utf-8 -*-
# stub: octopress-social 1.4.5 ruby lib

Gem::Specification.new do |s|
  s.name = "octopress-social".freeze
  s.version = "1.4.5"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Brandon Mathis".freeze]
  s.date = "2015-05-17"
  s.email = ["brandon@imathis.com".freeze]
  s.homepage = "http://github.com/octopress/social".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.7.6".freeze
  s.summary = "Easy social network integration for Jekyll sites".freeze

  s.installed_by_version = "2.7.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<jekyll>.freeze, [">= 2.0"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.7"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_development_dependency(%q<clash>.freeze, [">= 0"])
      s.add_development_dependency(%q<octopress-debugger>.freeze, [">= 0"])
    else
      s.add_dependency(%q<jekyll>.freeze, [">= 2.0"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.7"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_dependency(%q<clash>.freeze, [">= 0"])
      s.add_dependency(%q<octopress-debugger>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<jekyll>.freeze, [">= 2.0"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.7"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<clash>.freeze, [">= 0"])
    s.add_dependency(%q<octopress-debugger>.freeze, [">= 0"])
  end
end
