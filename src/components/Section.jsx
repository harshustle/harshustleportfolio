import React from 'react'

const Section = ({
  id,
  title,
  eyebrow,
  children,
  fullWidth = false,
  noPaddingTop = false,
}) => {
  return (
    <div>
          <section
      id={id}
      className={`w-full ${noPaddingTop ? "" : "pt-4"} scroll-mt-24`}
    >
      <div className={fullWidth ? "" : ""}>
        {(eyebrow || title) && (
          <header className="mb-8">
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.2em] text-sky-400 mb-2">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                {title}
              </h2>
            )}
          </header>
        )}

        {children}
      </div>
    </section>
    </div>
  )
}

export default Section;