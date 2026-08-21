import { useEffect, useMemo, useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectItems = [
  { title: 'Juguete de construcci\u00f3n El C\u00edrculo', location: 'Madrid, Espa\u00f1a', category: 'graphic', iconSrc: '/proyectos/iconos/el_circulo.png', imageSrc: '/proyectos/imagenes/el_circulo.png' },
  { title: 'Cartel de teatro Los intereses creados', location: 'Madrid, Espa\u00f1a', category: 'scenography', iconSrc: '/proyectos/iconos/intereses_creado.png', imageSrc: '/proyectos/imagenes/intereses_creado.png' },
  { title: 'Identidad Corporativa El Rastro', location: 'Madrid, Espa\u00f1a', category: 'graphic', iconSrc: '/proyectos/iconos/el_rastro.png', imageSrc: '/proyectos/imagenes/el_rastro.png' },
  { title: 'Tipograf\u00eda Hargok', location: 'Madrid, Espa\u00f1a', category: 'graphic', iconSrc: '/proyectos/iconos/hargok.png', imageSrc: '/proyectos/imagenes/hargok.png' },
  { title: 'L\u00e1mpara HAZ', location: 'Segovia, Espa\u00f1a', category: 'interiors', iconSrc: '/proyectos/iconos/HAZ.png', imageSrc: '/proyectos/imagenes/HAZ.png' },
  { title: 'Identidad Corporativa Podcast XRail', location: 'Madrid, Espa\u00f1a', category: 'graphic', iconSrc: '/proyectos/iconos/xrail.png', imageSrc: '/proyectos/imagenes/xrail.png' },
  { title: 'Identidad Corporativa Eneo', location: 'Madrid, Espa\u00f1a', category: 'art-direction', iconSrc: '/proyectos/iconos/eneo.png', imageSrc: '/proyectos/imagenes/eneo.png' },
  { title: 'Cartel de Fiestas Locales', location: 'San Rafael (Segovia), Espa\u00f1a', category: 'graphic', iconSrc: '/proyectos/iconos/fiestas_locales.png', imageSrc: '/proyectos/imagenes/fiestas_locales.png' },
  { title: 'Dise\u00f1o Editorial y Packaging', location: 'Santander, Espa\u00f1a', category: 'graphic', iconSrc: '/proyectos/iconos/editorial_packaging.png', imageSrc: '/proyectos/imagenes/editorial_packaging.png' },
  { title: 'Colecci\u00f3n de Ilustraciones Plantae', location: 'Villaviciosa (Madrid), Espa\u00f1a', category: 'academy', iconSrc: '/proyectos/iconos/plantae.png', imageSrc: '/proyectos/imagenes/plantae.png' },
  { title: 'Silla CROSS', location: 'Madrid, Espa\u00f1a', category: 'interiors', iconSrc: '/proyectos/iconos/CROSS.png', imageSrc: '/proyectos/imagenes/CROSS.png' },
  { title: 'Escenograf\u00eda UFV', location: 'Madrid, Espa\u00f1a', category: 'scenography', iconSrc: '/proyectos/iconos/UFV.png', imageSrc: '/proyectos/imagenes/UFV.png' },
  { title: 'Vivienda y Playground Hormiguero', location: 'Pontevedra, Espa\u00f1a', category: 'interiors', iconSrc: '/proyectos/iconos/hormiguero.png', imageSrc: '/proyectos/imagenes/hormiguero.png' },
  { title: 'Iluminaci\u00f3n de Capilla en ETSAM', location: 'Madrid, Espa\u00f1a', category: 'art-direction', iconSrc: '/proyectos/iconos/ETSAM.png', imageSrc: '/proyectos/imagenes/ETSAM.png' },
  { title: 'Identidad Corporativa PG', location: 'Madrid, Espa\u00f1a', category: 'graphic', iconSrc: '/proyectos/iconos/corporativa_pg.png', imageSrc: '/proyectos/imagenes/corporativa_pg.png' },
  { title: 'Escultura El Barco', location: 'Madrid, Espa\u00f1a', category: 'academy', iconSrc: '/proyectos/iconos/el_barco.png', imageSrc: '/proyectos/imagenes/el_barco.png' },
  { id: 'telefonica', title: 'Proyecto de Oficinas en Edificio Telef\u00f3nica', location: 'Segovia, Espa\u00f1a', category: 'interiors', iconSrc: '/proyectos/iconos/edificio_telefonica.png', imageSrc: '/proyectos/imagenes/edificio_telefonica.png' },
  { title: 'Proyecto Ajardinamiento MITECO', location: 'Madrid, Espa\u00f1a', category: 'landscape', iconSrc: '/proyectos/iconos/MITECO.png', imageSrc: '/proyectos/imagenes/MITECO.png' },
  { title: 'Proyecto Centro cultural El Bosque', location: 'Madrid, Espa\u00f1a', category: 'landscape', iconSrc: '/proyectos/iconos/EL_BOSQUE.png', imageSrc: '/proyectos/imagenes/EL_BOSQUE.png' },
  { title: 'Direcci\u00f3n de Arte para \u00c1lbum Musical', location: 'Madrid, Espa\u00f1a', category: 'art-direction', iconSrc: '/proyectos/iconos/albun_musical.png', imageSrc: '/proyectos/imagenes/albun_musical.png' },
  { title: 'Espacio Expositivo Temporal 2021', location: 'Madrid, Espa\u00f1a', category: 'scenography', iconSrc: '/proyectos/iconos/temporal_2021.png', imageSrc: '/proyectos/imagenes/temporal_2021.png' },
  { title: 'Dise\u00f1o de Logotipo y Livery V.karting', location: 'Villaviciosa (Madrid), Espa\u00f1a', category: 'graphic', iconSrc: '/proyectos/iconos/v_karting.png', imageSrc: '/proyectos/imagenes/v_karting.png' },
  { title: 'Branding y Etiquetas Bodega Soldrink', location: 'Toledo, Espa\u00f1a', category: 'graphic', iconSrc: '/proyectos/iconos/soldrink.png', imageSrc: '/proyectos/imagenes/soldrink.png' },
  { title: 'Stand ef\u00edmero de venta', location: 'Madrid, Espa\u00f1a', category: 'art-direction', iconSrc: '/proyectos/iconos/efimero.png', imageSrc: '/proyectos/imagenes/efimero.png' },
  { title: 'Residencia para artistas en Nave 16', location: 'Madrid, Espa\u00f1a', category: 'interiors', iconSrc: '/proyectos/iconos/nave_16.png', imageSrc: '/proyectos/imagenes/nave_16.png' },
]

function ProjectCard({
  title,
  location,
  category,
  iconSrc,
  imageSrc,
  onOpen,
}) {
  return (
    <article className="projects-card" data-category={category} onClick={onOpen}>
      <div className="projects-card-media">
        <div className="projects-card-icon">
          <img src={iconSrc} alt="" aria-hidden="true" />
        </div>
        <div className="projects-card-image">
          <img src={imageSrc} alt="" aria-hidden="true" />
        </div>
      </div>
      <h3>{title}</h3>
      <p>{location}</p>
    </article>
  )
}

export default function ProjectsPage({
  activePage,
  initialFilter = 'all',
  onBack,
  onNavigate,
  onOpenProject,
}) {
  const [isSpanish, setIsSpanish] = useState(false)
  const [activeFilter, setActiveFilter] = useState(initialFilter)

  useEffect(() => {
    setActiveFilter(initialFilter)
  }, [initialFilter])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectItems
    return projectItems.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section className="projects-page">
      <PageHeader
        activePage={activePage}
        isSpanish={isSpanish}
        onBack={onBack}
        onNavigate={onNavigate}
        onSetSpanish={setIsSpanish}
      />

      <ProjectsFilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="projects-page-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            location={project.location}
            category={project.category}
            iconSrc={project.iconSrc}
            imageSrc={project.imageSrc}
            onOpen={
              project.id === 'telefonica'
                ? () => onOpenProject?.('telefonica')
                : undefined
            }
          />
        ))}
      </div>

      <PageFooter />
    </section>
  )
}
