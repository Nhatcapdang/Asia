type Language = {
  id: string
  language: string
  head_menu: string[]
  banner_menu: string[]
  banner_title: string[]

  bloc_1: {
    title: string
    subtitle: string
    cases: {
      category: string
      cta: string
      description: string
      tagline: string
    }[]
  }

  bloc_2: {
    title: string
    cases: string[]
  }

  bloc_3: {
    title: string
    cases: {
      category: string
      description: string
      tagline: string
    }[]
  }

  bloc_4: {
    title: string
    subtitle: string
    text_title: string
    text: string
    pictos: {
      title: string
      description: string
    }[]
  }

  bloc_5: {
    title: string
    text: string
    footer: string
    reviews: {
      author: string
      date: string
      review: string
    }[]
  }

  bloc_6: {
    title: string
    subtitle: string
    text: string
    button: string
  }

  carte_point: {
    name: string
    website: string
    address: string
    phone: string
    fax?: string
    free_call?: string
    email: string
    coordinates?: {
      latitude: string
      longitude: string
    }
    activities: string[]
    marker_information: string[]
  }[]

  footer: {
    address: {
      name: string
      phone: string
      location: string
    }
    links: {
      name: string
      url: string
    }[]
  }
}
